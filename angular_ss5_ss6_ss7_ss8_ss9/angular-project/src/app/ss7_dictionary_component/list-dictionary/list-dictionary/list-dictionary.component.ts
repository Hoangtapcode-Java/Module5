import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../../Model/Dictionary";
import {DictionaryServiceService} from "../../service/dictionary-service.service";

@Component({
  selector: 'app-list-dictionary',
  templateUrl: './list-dictionary.component.html',
  styleUrls: ['./list-dictionary.component.css']
})
export class ListDictionaryComponent implements OnInit {
  dictionary : Dictionary[];

  constructor(private dictionaryService : DictionaryServiceService) {
    this.dictionary = dictionaryService.getAll();
  }

  ngOnInit(): void {
  }

}
