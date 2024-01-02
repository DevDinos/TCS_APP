import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BobPage } from './Bob.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BobPageRoutingModule } from './Bob-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BobPageRoutingModule
  ],
  declarations: [BobPage]
})
export class BobPageModule {}