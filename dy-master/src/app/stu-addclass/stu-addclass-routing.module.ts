import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuAddclassPage } from './stu-addclass.page';

const routes: Routes = [
  {
    path: '',
    component: StuAddclassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuAddclassPageRoutingModule {}
