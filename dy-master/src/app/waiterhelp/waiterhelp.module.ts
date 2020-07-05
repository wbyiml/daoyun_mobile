import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaiterhelpPageRoutingModule } from './waiterhelp-routing.module';

import { WaiterhelpPage } from './waiterhelp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaiterhelpPageRoutingModule
  ],
  declarations: [WaiterhelpPage]
})
export class WaiterhelpPageModule {}
