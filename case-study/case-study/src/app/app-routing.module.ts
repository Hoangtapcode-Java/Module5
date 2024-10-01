import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./case_study/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./case_study/customer-create/customer-create.component";
import {CustomerEditComponent} from "./case_study/customer-edit/customer-edit.component";


const routes: Routes = [
  {
    path : "customer",
    component : CustomerListComponent
  },
  {
    path : "customer/delete/:id",
    component : CustomerListComponent
  },
  {
    path : "customer/create",
    component : CustomerCreateComponent
  },
  {
    path : "customer/edit/:id",
    component : CustomerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
