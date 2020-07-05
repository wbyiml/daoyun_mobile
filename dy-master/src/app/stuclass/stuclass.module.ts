import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuclassPageRoutingModule } from './stuclass-routing.module';

import { StuclassPage } from './stuclass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuclassPageRoutingModule
  ],
  declarations: [StuclassPage]
})
export class StuclassPageModule {}
