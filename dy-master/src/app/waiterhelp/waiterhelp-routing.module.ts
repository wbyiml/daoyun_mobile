import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaiterhelpPage } from './waiterhelp.page';

const routes: Routes = [
  {
    path: '',
    component: WaiterhelpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaiterhelpPageRoutingModule {}
