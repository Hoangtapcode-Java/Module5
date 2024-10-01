import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient : HttpClient) { }

  getAll() : Observable<Student[]>{
    return this.httpClient.get<Student[]>("http://localhost:3000/student");
  }

  findById(number: number) : Observable<Student> {
    return this.httpClient.get<Student>("http://localhost:3000/student/" + number);
  }

  delete(number: number){
    return this.httpClient.delete("http://localhost:3000/student/" + number);
  }

  update(student, id : number) : Observable<any>{
    return this.httpClient.put<any>("http://localhost:3000/student/" + id, student);
  }
}
