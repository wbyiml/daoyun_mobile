import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuRegisterPage } from './stu-register.page';

const routes: Routes = [
  {
    path: '',
    component: StuRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuRegisterPageRoutingModule {}
