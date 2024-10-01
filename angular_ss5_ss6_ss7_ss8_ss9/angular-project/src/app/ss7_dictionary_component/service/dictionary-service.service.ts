import { Injectable } from '@angular/core';
import {Dictionary} from "../Model/Dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionary : Dictionary[] = [
    {
      id : 1,
      english : 'Hello',
      vietnamese : 'Xin chào'
    },
    {
      id : 2,
      english : 'GoodBye',
      vietnamese : 'Tạm biệt'
    }
  ];

  constructor() {

  }

  getAll(){
    return this.dictionary;
  }

  findById(value : number){
    return this.dictionary.filter(dictionary => dictionary.id === value)[0];
  }
}
