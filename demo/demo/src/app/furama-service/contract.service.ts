import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../model/Contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient: HttpClient) {
  }

  getAllContract(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>('http://localhost:3000/contract');
  }

  addNew(value: any) {
    return this.httpClient.post<any>('http://localhost:3000/contract', value);
  }

  delete(id: number) {
    return this.httpClient.delete('http://localhost:3000/contract/' + id);
  }

  update(id, contract) {
    return this.httpClient.put('http://localhost:3000/contract/' + id, contract);
  }
}
