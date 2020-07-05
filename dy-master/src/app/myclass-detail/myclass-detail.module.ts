import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';
import { IonicModule } from '@ionic/angular';

import { MyclassDetailPageRoutingModule } from './myclass-detail-routing.module';

import { MyclassDetailPage } from './myclass-detail.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    QRCodeModule,
    MyclassDetailPageRoutingModule
  ],
  declarations: [MyclassDetailPage]
})
export class MyclassDetailPageModule {}
