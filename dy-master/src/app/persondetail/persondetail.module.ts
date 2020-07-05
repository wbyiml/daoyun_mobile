import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersondetailPageRoutingModule } from './persondetail-routing.module';

import { PersondetailPage } from './persondetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersondetailPageRoutingModule
  ],
  declarations: [PersondetailPage]
})
export class PersondetailPageModule {}
