import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-component',
  templateUrl: './calculate-component.component.html',
  styleUrls: ['./calculate-component.component.css']
})
export class CalculateComponentComponent implements OnInit {

  constructor() { }

  result : number = 0;

  ngOnInit(): void {
  }

  plus(value1, value2){
    this.result = parseFloat(value1) + parseFloat(value2);
    // this.result = value1 + value2;
  }

  tru(value1, value2){
    this.result = parseFloat(value1) - parseFloat(value2);
  }

  nhan(value1, value2) {
    this.result = parseFloat(value1) * parseFloat(value2);
  }

  chia(value1, value2){
    this.result = parseFloat(value1) / parseFloat(value2);
  }
}
