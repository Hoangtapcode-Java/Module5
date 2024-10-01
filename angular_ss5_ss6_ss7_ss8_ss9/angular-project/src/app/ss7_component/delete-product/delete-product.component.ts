import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";
import {Product} from "../model/Product";
import Swal from "sweetalert2/dist/sweetalert2.js";


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  product : Product;

  constructor(private activatedRoute : ActivatedRoute, private productService :ProductService,private router : Router) {
    this.activatedRoute.paramMap.subscribe(next =>{
      const id = next.get('id');
      if(id != null){
        console.log(id);
        this.productService.findById(parseInt(id)).subscribe(next => {
          this.product = next;
          Swal.fire({
            title: 'Are you sure want to remove?' + this.product.name,
            text: 'You will not be able to recover this product!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.value) {
              this.productService.delete(parseInt(id)).subscribe(next =>{
                Swal.fire(
                  'Deleted!',
                  'Your imaginary file has been deleted.',
                  'success'
                )
                this.router.navigateByUrl('');
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
              this.router.navigateByUrl('');
            }
          })
        });


      }
    },error => {

    },()=>{

    });
  }

  ngOnInit(): void {
  }

  delete(){

  }
}
