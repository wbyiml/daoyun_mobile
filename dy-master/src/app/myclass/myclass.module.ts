import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyclassPageRoutingModule } from './myclass-routing.module';

import { MyclassPage } from './myclass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyclassPageRoutingModule
  ],
  declarations: [MyclassPage]
})
export class MyclassPageModule {}
