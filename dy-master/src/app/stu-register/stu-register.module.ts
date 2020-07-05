import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuRegisterPageRoutingModule } from './stu-register-routing.module';

import { StuRegisterPage } from './stu-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuRegisterPageRoutingModule
  ],
  declarations: [StuRegisterPage]
})
export class StuRegisterPageModule {}
