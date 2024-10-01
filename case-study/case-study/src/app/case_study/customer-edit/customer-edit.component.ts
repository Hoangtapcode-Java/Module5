import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/Customer";
import {CustomerServiceService} from "../service/customer-service.service";
import {CustomerTypeServiceService} from "../service/customer-type-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerType} from "../model/CustomerType";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer : Customer;

  customerTypes : CustomerType[];

  reactiveForm : FormGroup;

  constructor(private customerService : CustomerServiceService, private customerTypeService : CustomerTypeServiceService,
              private router : Router, private activatedRoute : ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next =>{
      const id = next.get('id');
      this.customerService.findById(parseInt(id)).subscribe(next =>{
        this.customer = next;
        this.customerTypeService.getAll().subscribe(next =>{
          this.customerTypes = next;
          this.reactiveForm = new FormGroup({
            id : new FormControl(this.customer.id),
            name : new FormControl(this.customer.name),
            dateOfBirth : new FormControl(this.customer.dateOfBirth),
            gender : new FormControl(this.customer.gender),
            idCard : new FormControl(this.customer.idCard),
            phoneNumber : new FormControl(this.customer.phoneNumber),
            email : new FormControl(this.customer.email),
            address : new FormControl(this.customer.address),
            customerType : new FormControl(this.customer.customerType)
          })
        })
      })
    })
  }

  ngOnInit(): void {
  }

  update() {
    if(this.reactiveForm.valid){
      this.customerService.update(this.reactiveForm.value, this.reactiveForm.value.id).subscribe(next => {
        this.router.navigateByUrl("customer");
      })
    }
  }
}
