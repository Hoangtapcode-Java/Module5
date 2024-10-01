import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProductComponent} from "./ss7_component/list-product/list-product.component";
import {CreateProductComponent} from "./ss7_component/create-product/create-product.component";
import {EditProductComponent} from "./ss7_component/edit-product/edit-product.component";
import {DeleteProductComponent} from "./ss7_component/delete-product/delete-product.component";
import {ListDictionaryComponent} from "./ss7_dictionary_component/list-dictionary/list-dictionary/list-dictionary.component";
import {DetailComponent} from "./ss7_dictionary_component/detail-dictionary/detail/detail.component";


const routes: Routes = [
  {
    path : '', component : ListProductComponent
  },
  {
    path: 'create',component: CreateProductComponent
  },
  {
    path: 'update/:id', component: EditProductComponent
  },
  {
    path: 'delete/:id', component: DeleteProductComponent
  }

  // {
  //   path : '', component : ListDictionaryComponent
  // },
  // {
  //   path : 'detail/:id', component : DetailComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
