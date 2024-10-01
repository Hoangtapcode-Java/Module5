import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../furama-service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/Customer';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  reactiveForm: FormGroup;
  customer: Customer;

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      this.customerService.getById(parseInt(id)).subscribe(next => {
        this.customer = next;
        this.reactiveForm = new FormGroup({
          id: new FormControl(this.customer.id),
          nameCustomer: new FormControl(this.customer.nameCustomer),
          dateOfBirth: new FormControl(this.customer.dateOfBirth),
          gender: new FormControl(this.customer.gender),
          phoneNumber: new FormControl(this.customer.phoneNumber),
          idCard: new FormControl(this.customer.idCard),
          email: new FormControl(this.customer.email),
          address: new FormControl(this.customer.address),
          status: new FormControl('Đã đặt')
        });
      });
    });
  }

  ngOnInit(): void {
  }

  update() {
    this.customerService.update(this.reactiveForm.value.id, this.reactiveForm.value).subscribe(next => {
      this.router.navigateByUrl('customer-list');
    });
  }
}
