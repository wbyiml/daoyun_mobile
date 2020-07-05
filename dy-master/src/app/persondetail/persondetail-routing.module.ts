import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersondetailPage } from './persondetail.page';

const routes: Routes = [
  {
    path: '',
    component: PersondetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersondetailPageRoutingModule {}
