import { Injectable } from '@angular/core';
import {Customer} from "../model/Customer";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  customer : Customer[];

  constructor(private httpClient : HttpClient) { }

  getAll() : Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("  http://localhost:3000/customer");
  }

  findById(number: number) : Observable<Customer> {
    return this.httpClient.get<Customer>("http://localhost:3000/customer/" + number);
  }

  delete(number: number){
    return this.httpClient.delete("http://localhost:3000/customer/" + number);
  }

  addNew(customer) : Observable<any>{
    return this.httpClient.post<any>("http://localhost:3000/customer", customer);
  }

  update(customer, id : number) : Observable<any>{
    return this.httpClient.put<any>("http://localhost:3000/customer/" + id, customer);
  }

  findByName(name : string ) : Observable<Customer[]>{
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer?name_like=" + name);
  }
}
