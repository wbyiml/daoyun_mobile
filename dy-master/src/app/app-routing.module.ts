import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then( m => m.PersonPageModule)
  },
  {
    path: 'myclass',
    loadChildren: () => import('./myclass/myclass.module').then( m => m.MyclassPageModule)
  },
  {
    path: 'addclass',
    loadChildren: () => import('./addclass/addclass.module').then( m => m.AddclassPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'persondetail',
    loadChildren: () => import('./persondetail/persondetail.module').then( m => m.PersondetailPageModule)
  },
  {
    path: 'stuclass',
    loadChildren: () => import('./stuclass/stuclass.module').then( m => m.StuclassPageModule)
  },
  {
    path: 'stu-register',
    loadChildren: () => import('./stu-register/stu-register.module').then( m => m.StuRegisterPageModule)
  },
  {
    path: 'stu-addclass',
    loadChildren: () => import('./stu-addclass/stu-addclass.module').then( m => m.StuAddclassPageModule)
  },
  {
    path: 'stuclass-detail',
    loadChildren: () => import('./stuclass-detail/stuclass-detail.module').then( m => m.StuclassDetailPageModule)
  },
  {
    path: 'set-password',
    loadChildren: () => import('./set-password/set-password.module').then( m => m.SetPasswordPageModule)
  },
  {
    path: 'change-phone',
    loadChildren: () => import('./change-phone/change-phone.module').then( m => m.ChangePhonePageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'register-detail',
    loadChildren: () => import('./register-detail/register-detail.module').then( m => m.RegisterDetailPageModule)
  },

  {
    path: 'waiterhelp',
    loadChildren: () => import('./waiterhelp/waiterhelp.module').then( m => m.WaiterhelpPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
