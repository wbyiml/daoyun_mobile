import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuclassPage } from './stuclass.page';

const routes: Routes = [
  {
    path: '',
    component: StuclassPage,
    children: [
          {
            path: 'myclass-member',
            loadChildren: () => import('../myclass-member/myclass-member.module').then(m => m.MyclassMemberPageModule)
          },
          {
            path: 'stu-register',
            loadChildren: () => import('../stu-register/stu-register.module').then( m => m.StuRegisterPageModule)
          },
          {
            path: 'stuclass-detail',
            loadChildren: () => import('../stuclass-detail/stuclass-detail.module').then( m => m.StuclassDetailPageModule)
          },
          {
            path: '',
            redirectTo: '/stuclass/stu-register',
            pathMatch: 'full'
             },
         ]
  },

  {
    path: '',
    redirectTo: '/stuclass/stu-register',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuclassPageRoutingModule {}
