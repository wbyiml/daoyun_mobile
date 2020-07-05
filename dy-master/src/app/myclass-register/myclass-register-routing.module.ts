import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyclassRegisterPage } from './myclass-register.page';

const routes: Routes = [
  {
    path: '',
    component: MyclassRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyclassRegisterPageRoutingModule {}
