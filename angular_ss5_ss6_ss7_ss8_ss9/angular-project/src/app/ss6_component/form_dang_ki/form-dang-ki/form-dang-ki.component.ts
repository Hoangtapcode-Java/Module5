import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../model/User";

@Component({
  selector: 'app-form-dang-ki',
  templateUrl: './form-dang-ki.component.html',
  styleUrls: ['./form-dang-ki.component.css']
})
export class FormDangKiComponent implements OnInit {
  user : User;

  @Output()
  eventEmmit = new EventEmitter();

  reactiveForm : FormGroup;


  constructor() {
    this.reactiveForm = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9]+@gmail.com$')]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl("",[Validators.required,Validators.minLength(6)]),
      age: new FormControl("",[Validators.required,Validators.min(18)]),
      gender: new FormControl("",[Validators.required]),
      country: new FormControl("",[Validators.required]),
      phone: new FormControl("",[Validators.required,Validators.pattern('^\\+84\\d{9,10}$')])
    })
  }

  ngOnInit(): void {
  }

  // validatorPassword(passwordOne : AbstractControl,passwordTwo :AbstractControl) : any{
  //   if(passwordOne.value != passwordTwo.value){
  //     return{invalid : true}
  //   }
  // }

  addNewUser() {
    console.log(this.reactiveForm)
    this.eventEmmit.emit(this.reactiveForm.value);
  }
}
