import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyclassPage } from './myclass.page';

const routes: Routes = [
  {
    path: '',
    component: MyclassPage,
    children: [
      {
        path: 'myclass-member',
        loadChildren: () => import('../myclass-member/myclass-member.module').then(m => m.MyclassMemberPageModule)
      },
      {
        path: 'myclass-register',
        loadChildren: () => import('../myclass-register/myclass-register.module').then( m => m.MyclassRegisterPageModule)
      },
      {
        path: 'myclass-detail',
        loadChildren: () => import('../myclass-detail/myclass-detail.module').then( m => m.MyclassDetailPageModule)
      },
      {
        path: '',
        redirectTo: '/myclass/myclass-register',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/myclass/myclass-register',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyclassPageRoutingModule { }
