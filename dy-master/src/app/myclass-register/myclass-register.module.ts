import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyclassRegisterPageRoutingModule } from './myclass-register-routing.module';

import { MyclassRegisterPage } from './myclass-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyclassRegisterPageRoutingModule
  ],
  declarations: [MyclassRegisterPage]
})
export class MyclassRegisterPageModule {}
