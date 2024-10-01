import { Injectable } from '@angular/core';
import {Category} from "./model/Category";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  category :Category[];

  constructor(private httpClient : HttpClient) { }

  getAll() : Observable<Category[]>{
    return this.httpClient.get<Category[]>("http://localhost:3000/category");
  }
}
