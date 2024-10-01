import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';
import {CustomerService} from '../../furama-service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

declare const Swal: any;


// @ts-ignore
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute, private route: Router) {
    this.customerService.getAllCustomer().subscribe(next => {
      this.customers = next;
    });
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      console.log(id);
      if (id != null) {
        Swal.fire({
          title: 'Are you sure?',
          text: 'You won\'t be able to revert this!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.customerService.delete(parseInt(id)).subscribe(next => {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              this.route.navigateByUrl('/customer-list');
            });
          } else {
            this.route.navigateByUrl('/customer-list');
          }
        });
      }
    });
  }

  ngOnInit(): void {
  }

}
