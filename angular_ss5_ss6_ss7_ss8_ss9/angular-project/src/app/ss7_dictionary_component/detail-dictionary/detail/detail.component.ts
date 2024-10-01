import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../../Model/Dictionary";
import {ActivatedRoute} from "@angular/router";
import {DictionaryServiceService} from "../../service/dictionary-service.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  dictionary : Dictionary;
  constructor(private activatedRoute : ActivatedRoute, private dictionaryService : DictionaryServiceService) {
    this.activatedRoute.paramMap.subscribe(next =>{
      const id = next.get('id');
      if(id != null){
        this.dictionary = this.dictionaryService.findById(parseInt(id));
      }
    },error => {

    },()=>{

    });
  }

  ngOnInit(): void {
  }

}
