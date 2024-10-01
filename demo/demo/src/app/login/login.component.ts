import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Login} from '../model/login';
import {UserService} from '../furama-service/user.service';

declare const Swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: Login[];
  reactiveForm: FormGroup;

  constructor(private route: Router, private userService: UserService) {
    this.reactiveForm = new FormGroup({
      id: new FormControl(),
      account: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(next => {
      this.users = next;
    });
  }

  sigin() {
    if (this.reactiveForm.value.account === 'user' && this.reactiveForm.value.password === 'user123') {
      this.route.navigateByUrl('profile');
    } else if (this.reactiveForm.value.account === 'admin' && this.reactiveForm.value.password === 'admin123') {
      this.route.navigateByUrl('profile-admin');
    } else {
      Swal.fire({
        title: 'Lỗi!',
        icon: 'error',
        confirmButtonText: 'OK',
        text : 'Tài khoản hoặc mặt khẩu không đúng'
      });
    }
  }
}
