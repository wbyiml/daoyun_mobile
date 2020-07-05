import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddclassPage } from './addclass.page';

const routes: Routes = [
  {
    path: '',
    component: AddclassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddclassPageRoutingModule {}
