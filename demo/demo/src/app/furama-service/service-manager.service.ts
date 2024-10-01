import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Service} from '../model/Service';

@Injectable({
  providedIn: 'root'
})
export class ServiceManagerService {
  service: Service[] = [];
  private url = "http://localhost:3000/service";

  constructor(private httpClient: HttpClient) { }
  getAllService(): Observable<Service[]> {
    return this.httpClient.get<Service[]>('http://localhost:3000/service');
  }
  addNew(service): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/service', service);
  }
  delete(id: number) {
    return this.httpClient.delete('http://localhost:3000/service/' + id);
  }
  getWithName(nameService){
    return this.httpClient.get<Service[]>(`${this.url}?_order=desc&nameService_like=${nameService}`)
  }
}
