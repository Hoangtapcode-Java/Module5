import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { BrandStoryScreenComponent } from './brand-story-screen/brand-story-screen.component';
import { ContactUsScreenComponent } from './contact-us-screen/contact-us-screen.component';
import { LoginComponent } from './login/login.component';
import { ServiceManagerComponent } from './user/service-manager/service-manager.component';
import { ContractComponent } from './user/contract/contract.component';
import { CustomerComponent } from './user/customer/customer.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerCreateComponent } from './user/customer-create/customer-create.component';
import { ContractCreateComponent } from './user/contract-create/contract-create.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ProfileAdminComponent } from './admin-manager/profile-admin/profile-admin.component';
import { ContractUpdateComponent } from './user/contract-update/contract-update.component';
import { CustomerUpdateComponent } from './user/customer-update/customer-update.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    BrandStoryScreenComponent,
    ContactUsScreenComponent,
    LoginComponent,
    ServiceManagerComponent,
    ContractComponent,
    CustomerComponent,
    CustomerCreateComponent,
    ContractCreateComponent,
    ProfileComponent,
    ProfileAdminComponent,
    ContractUpdateComponent,
    CustomerUpdateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
