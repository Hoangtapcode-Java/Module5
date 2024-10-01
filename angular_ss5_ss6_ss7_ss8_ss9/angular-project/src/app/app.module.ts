import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDangKiComponent } from './ss6_component/form_dang_ki/form-dang-ki/form-dang-ki.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserInforComponent } from './ss6_component/form_dang_ki/user-infor/user-infor.component';
import { FormDangNhapComponent } from './ss6_component/form_dang_nhap/form-dang-nhap/form-dang-nhap.component';
import { HeaderComponent } from './case_study/header/header/header.component';
import { ListProductComponent } from './ss7_component/list-product/list-product.component';
import { CreateProductComponent } from './ss7_component/create-product/create-product.component';
import { EditProductComponent } from './ss7_component/edit-product/edit-product.component';
import { DeleteProductComponent } from './ss7_component/delete-product/delete-product.component';
import { ListDictionaryComponent } from './ss7_dictionary_component/list-dictionary/list-dictionary/list-dictionary.component';
import { DetailComponent } from './ss7_dictionary_component/detail-dictionary/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormDangKiComponent,
    UserInforComponent,
    FormDangNhapComponent,
    HeaderComponent,
    ListProductComponent,
    CreateProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    ListDictionaryComponent,
    DetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
