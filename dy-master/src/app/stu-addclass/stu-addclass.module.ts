import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuAddclassPageRoutingModule } from './stu-addclass-routing.module';

import { StuAddclassPage } from './stu-addclass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuAddclassPageRoutingModule
  ],
  declarations: [StuAddclassPage]
})
export class StuAddclassPageModule {}
