import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuclassDetailPage } from './stuclass-detail.page';

const routes: Routes = [
  {
    path: '',
    component: StuclassDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuclassDetailPageRoutingModule {}
