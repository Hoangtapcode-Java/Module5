import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServiceComponent} from './service/service.component';
import {BrandStoryScreenComponent} from './brand-story-screen/brand-story-screen.component';
import {ContactUsScreenComponent} from './contact-us-screen/contact-us-screen.component';
import {LoginComponent} from './login/login.component';
import {CustomerComponent} from './user/customer/customer.component';
import {CustomerCreateComponent} from './user/customer-create/customer-create.component';
import {ContractComponent} from './user/contract/contract.component';
import {ContractCreateComponent} from './user/contract-create/contract-create.component';
import {ProfileComponent} from './user/profile/profile.component';
import {ServiceManagerComponent} from './user/service-manager/service-manager.component';
import {ProfileAdminComponent} from './admin-manager/profile-admin/profile-admin.component';
import {CustomerUpdateComponent} from './user/customer-update/customer-update.component';
const routes: Routes = [
  {
    path : 'home', component: HomeComponent
  },
  {
    path : 'service', component: ServiceComponent
  },
  {
    path : 'brand', component: BrandStoryScreenComponent
  },
  {
    path : 'contact', component: ContactUsScreenComponent
  },
  {
    path : 'login', component: LoginComponent
  },
  {
    path: 'customer-list', component: CustomerComponent
  },
  {
    path: 'customer-create', component: CustomerCreateComponent
  },
  {
    path: 'customer-list/delete/:id', component: CustomerComponent
  },
  {
    path: 'contract-list', component: ContractComponent
  },
  {
    path: 'contract/delete/:id', component: ContractComponent
  },
  {
    path: 'contract-create', component: ContractCreateComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'service-manager', component: ServiceManagerComponent
  },
  {
    path: 'service-manager/delete/:id', component: ServiceManagerComponent
  },
  {
    path: 'profile-admin', component: ProfileAdminComponent
  },
  {
    path: 'customer/update/:id', component: CustomerUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
