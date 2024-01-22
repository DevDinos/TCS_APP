import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckIn2PageRoutingModule } from './check-in2-routing.module';

import { CheckIn2Page } from './check-in2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckIn2PageRoutingModule
  ],
  declarations: [CheckIn2Page]
})
export class CheckIn2PageModule {}
