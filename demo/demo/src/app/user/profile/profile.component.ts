import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CustomerService} from '../../furama-service/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
