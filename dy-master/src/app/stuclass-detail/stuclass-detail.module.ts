import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuclassDetailPageRoutingModule } from './stuclass-detail-routing.module';

import { StuclassDetailPage } from './stuclass-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuclassDetailPageRoutingModule
  ],
  declarations: [StuclassDetailPage]
})
export class StuclassDetailPageModule {}
