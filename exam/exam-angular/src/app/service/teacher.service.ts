import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Teacher} from '../model/teacher';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teacher: Teacher[] = [];

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Teacher[]> {
    this.httpClient.get<Teacher[]>(' http://localhost:3000/teacher');
  }
}
