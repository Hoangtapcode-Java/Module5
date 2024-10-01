import { Injectable } from '@angular/core';
import {Product} from "./model/Product";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product : Product[] = [{
    id : 1, name : 'Iphone 12', price : 10000000, descriptions : 'New'
  },
    {
      id : 2, name : 'Iphone 13', price : 25000000, descriptions : 'New'
    }];

  constructor(private httpClient : HttpClient) {
  }

  getAll() : Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/product") ;
  }

  addNewProduct(product) : Observable<any> {
    return this.httpClient.post<any>("http://localhost:3000/product", product);
  }

  findById(value : number) : Observable<Product>{
    // return this.product.filter(product => product.id === value)[0];
    return this.httpClient.get<Product>("http://localhost:3000/product/" + value);
  }

  update(value : Product, id : number) : Observable<any>{
    return this.httpClient.put<any>("http://localhost:3000/product/" + id ,value);
    // let i : number;
    // for(i = 0; i < this.product.length; i++){
    //   if(this.product[i].id == value.id){
    //     this.product[i].id = value.id;
    //     this.product[i].name = value.name;
    //     this.product[i].price = value.price;
    //     this.product[i].descriptions = value.descriptions;
    //   }
    // }
  }

  delete(value : number){
    // const newProducts = this.product.filter(product => product.id !== value);
    // console.log(newProducts);
    // this.product = newProducts;
    console.log(value);
    return this.httpClient.delete("http://localhost:3000/product/" + value);
  }
}
