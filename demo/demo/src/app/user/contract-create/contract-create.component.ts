import {Component, OnInit} from '@angular/core';
import {ContractService} from '../../furama-service/contract.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/Customer';
import {CustomerService} from '../../furama-service/customer.service';
import {ServiceManagerService} from '../../furama-service/service-manager.service';
import {Service} from '../../model/Service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  reactiveForm: FormGroup;
  customers: Customer[] = [];
  services: Service[] = [];

  constructor(private contractService: ContractService, private customerService: CustomerService, private serviceManagerService: ServiceManagerService,
              private route: Router) {
    this.customerService.getAllCustomer().subscribe(next => {
      this.customers = next;
      this.serviceManagerService.getAllService().subscribe(next => {
        this.services = next;
        this.reactiveForm = new FormGroup({
          id: new FormControl(),
          customer: new FormControl('', [Validators.required]),
          service: new FormControl('', [Validators.required]),
          dateBegin: new FormControl('', [Validators.required]),
          dateEnd: new FormControl('', [Validators.required])
        });
      });
    });
  }

  ngOnInit(): void {
  }

  addNew() {
    console.log(this.reactiveForm.value);
    if (this.reactiveForm.valid) {
      this.contractService.addNew(this.reactiveForm.value).subscribe(next =>{
        this.route.navigateByUrl('contract-list');
      });
    }
  }
}
