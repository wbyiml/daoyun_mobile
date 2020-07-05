import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterDetailPageRoutingModule } from './register-detail-routing.module';

import { RegisterDetailPage } from './register-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterDetailPageRoutingModule
  ],
  declarations: [RegisterDetailPage]
})
export class RegisterDetailPageModule {}
