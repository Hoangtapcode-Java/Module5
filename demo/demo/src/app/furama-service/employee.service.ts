import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:3000/employee');
  }
  addNew(employee): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/employee', employee);
  }
  getById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>('http://localhost:3000/employee/' + id);
  }
  delete(id: number) {
    console.log(id);
    return this.httpClient.delete('http://localhost:3000/employee/' + id);
  }
  update(id, employee) {
    return this.httpClient.put('http://localhost:3000/employee/' + id, employee);
  }
}
