import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customer');
  }

  addNew(customer): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/customer', customer);
  }

  delete(id) {
    return this.httpClient.delete('http://localhost:3000/customer/' + id);
  }
  update(id, customer) {
    return this.httpClient.put('http://localhost:3000/customer/' + id, customer);
  }
  getById(id): Observable<Customer> {
    return this.httpClient.get<Customer>('http://localhost:3000/customer/' + id);
  }
}
