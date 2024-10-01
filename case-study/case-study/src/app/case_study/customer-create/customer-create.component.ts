import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../model/CustomerType";
import {CustomerServiceService} from "../service/customer-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerTypeServiceService} from "../service/customer-type-service.service";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerTypes : CustomerType[] = [];

  reactiveForm : FormGroup;

  constructor(private customerTypeService : CustomerTypeServiceService, private customerService : CustomerServiceService,
              private activatedRoute : ActivatedRoute, private router : Router) {
    this.customerTypeService.getAll().subscribe(next =>{
      this.customerTypes = next;
      this.reactiveForm = new FormGroup({
        id : new FormControl(),
        name : new FormControl("",[Validators.required]),
        dateOfBirth : new FormControl("",[Validators.required]),
        gender : new FormControl("",[Validators.required]),
        phoneNumber : new FormControl("",[Validators.required]),
        idCard : new FormControl("",[Validators.required]),
        email : new FormControl("",[Validators.required]),
        address : new FormControl("",[Validators.required]),
        customerType : new FormControl("",[Validators.required])
      })
    })
  }

  ngOnInit(): void {
  }

  addNew() {
    if(this.reactiveForm.valid){
      console.log(this.reactiveForm.value);
      this.customerService.addNew(this.reactiveForm.value).subscribe(next => {
        this.router.navigateByUrl("customer");
      })
    }
  }
}
