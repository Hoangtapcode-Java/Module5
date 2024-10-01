import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-dang-nhap',
  templateUrl: './form-dang-nhap.component.html',
  styleUrls: ['./form-dang-nhap.component.css']
})
export class FormDangNhapComponent implements OnInit {

  reactiveForm : FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9]+@gmail.com$')]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)]),
    })
  }

  login(){
    console.log(this.reactiveForm);
  }
  ngOnInit(): void {
  }

}
