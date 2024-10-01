import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../furama-service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute, private route: Router) {
    this.reactiveForm = new FormGroup({
      id: new FormControl(),
      nameCustomer: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  addNew() {
    if (this.reactiveForm.valid) {
      this.customerService.addNew(this.reactiveForm.value).subscribe(next => {
        this.route.navigateByUrl('customer-list');
      });
    }
  }
}
