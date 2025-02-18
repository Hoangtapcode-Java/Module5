import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {EditComponent} from "./edit/edit.component";


const routes: Routes = [
  {
    path : "student",
    component : ListComponent
  },
  {
    path : "student/edit/:id",
    component : EditComponent
  },
  {
    path : "student/delete/:id",
    component : ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
