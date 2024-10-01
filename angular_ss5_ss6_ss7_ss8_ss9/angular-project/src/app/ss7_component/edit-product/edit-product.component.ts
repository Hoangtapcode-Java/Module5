import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/Product";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../model/Category";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product : Product;

  categories : Category[]=[];

  reactiveForm : FormGroup;

  constructor(private productService : ProductService, private router : Router, private activatedRoute : ActivatedRoute, private categoryService : CategoryService) {
    this.activatedRoute.paramMap.subscribe(next =>{
      const id = next.get('id');
      if(id != null){
        this.productService.findById(parseInt(id)).subscribe(next =>{
          console.log(next);
          this.product = next;
          this.categoryService.getAll().subscribe( next =>{
            this.categories = next;
            this.reactiveForm = new FormGroup({
              id : new FormControl(this.product.id),
              name : new FormControl(this.product.name),
              price : new FormControl(this.product.price),
              descriptions : new FormControl(this.product.descriptions),
              category : new FormControl(this.product.category)
            });
          })
        });
      }
    },error => {

    },()=>{

    });

  }



  ngOnInit(): void {
  }

  update(){
    this.productService.update(this.reactiveForm.value, this.product.id).subscribe(next => {
      this.router.navigateByUrl('');
    });

  }
}
