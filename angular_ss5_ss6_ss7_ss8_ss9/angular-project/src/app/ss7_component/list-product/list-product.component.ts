import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../product.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  product : Product[]=[];

  constructor(private productService : ProductService, private httpClient : HttpClient) {
      this.productService.getAll().subscribe(next => {
        console.log(next);
        this.product = next;
      })
  }
  ngOnInit(): void {
  }

}
