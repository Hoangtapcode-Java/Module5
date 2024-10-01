import { Component, OnInit } from '@angular/core';
import {User} from "../model/User";

@Component({
  selector: 'app-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.css']
})
export class UserInforComponent implements OnInit {
  users: User[] = [
    {
      email: 'hoang@gmail.com',
      password: '123',
      confirmPassword: '123',
      age : 18,
      country: 'Da Nang',
      gender: 'nam',
      phone: '0935146589'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  addNewUser(event: any): void {
    this.users.push(event);
  }
}
