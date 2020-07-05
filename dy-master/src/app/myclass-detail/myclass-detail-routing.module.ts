import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyclassDetailPage } from './myclass-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MyclassDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyclassDetailPageRoutingModule {}
