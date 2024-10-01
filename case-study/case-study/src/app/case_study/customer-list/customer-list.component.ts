import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from "../service/customer-service.service";
import {Customer} from "../model/Customer";
import {CustomerType} from "../model/CustomerType";
import {CustomerTypeServiceService} from "../service/customer-type-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2/dist/sweetalert2.js";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer : Customer[] = [];
  custom : Customer;
  customerType : CustomerType[] = [];
  p: number = 1;

  constructor(private customerService : CustomerServiceService, private customerTypeService : CustomerTypeServiceService,
              private router : Router, private activatedRoute : ActivatedRoute) {
    this.customerService.getAll().subscribe( next =>{
      this.customer = next;
      this.customerTypeService.getAll().subscribe(next =>{
        this.customerType = next;
      })
    })
    this.activatedRoute.paramMap.subscribe(next =>{
      const id = next.get('id');
      if(id != null){
        console.log(id);
        this.customerService.findById(parseInt(id)).subscribe(next => {
          this.custom = next;
          Swal.fire({
            title: 'Are you sure want to remove?' + this.custom.name,
            text: 'You will not be able to recover this product!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.value) {
              this.customerService.delete(parseInt(id)).subscribe(next =>{
                Swal.fire(
                  'Deleted!',
                  'Your imaginary file has been deleted.',
                  'success'
                )
                this.router.navigateByUrl('customer');
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
              this.router.navigateByUrl('customer');
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

  search(value: string) {
    this.customerService.findByName(value).subscribe(next=>{
      if(next == null){
        alert("null");
      }else{
        this.customer = next;
      }

    })
  }
}
