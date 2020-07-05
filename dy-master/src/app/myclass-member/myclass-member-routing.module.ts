import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyclassMemberPage } from './myclass-member.page';

const routes: Routes = [
  {
    path: '',
    component: MyclassMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyclassMemberPageRoutingModule {}
