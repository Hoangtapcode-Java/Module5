import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/Category";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  reactiveForm : FormGroup;

  categories : Category[]=[];

  constructor(private productService : ProductService, private router : Router,private httpClient : HttpClient, private categoryService : CategoryService) {
    this.categoryService.getAll().subscribe(next =>{
      this.categories = next;
      this.reactiveForm = new FormGroup({
        id : new FormControl(),
        name : new FormControl(),
        price : new FormControl(),
        descriptions : new FormControl(),
        category : new FormControl()
      })
    })
  }

  ngOnInit(): void {
  }

  addNew() {
    if(this.reactiveForm.valid){
      this.productService.addNewProduct(this.reactiveForm.value).subscribe(next =>{
        this.router.navigateByUrl('');
      });

    }
  }
}
