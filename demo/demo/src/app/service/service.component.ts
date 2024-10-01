import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../furama-service/customer.service';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
declare const Swal: any;


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private customerService: CustomerService, private route: Router) {
    this.reactiveForm = new FormGroup({
      id: new FormControl(),
      nameCustomer: new FormControl(),
      dateOfBirth: new FormControl(),
      email: new FormControl(),
      phoneNumber: new FormControl(),
      status: new FormControl('Đang chờ')
    });
  }

  ngOnInit(): void {
  }

  addNew() {
    this.customerService.addNew(this.reactiveForm.value).subscribe(next => {
      Swal.fire({
        // title: 'Lỗi!',
        icon: 'success',
        confirmButtonText: 'OK',
        text : 'Đã gửi thông tin thành công'
      });
      this.route.navigateByUrl('/service');
    });
  }
}
