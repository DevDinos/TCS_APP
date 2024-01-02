import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckInPage } from './CheckIn.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CheckInPageRoutingModule } from './CheckIn-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CheckInPageRoutingModule
  ],
  declarations: [CheckInPage]
})
export class CheckInPageModule {}