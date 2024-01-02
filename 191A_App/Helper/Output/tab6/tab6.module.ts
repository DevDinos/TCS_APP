import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tab6Page } from './tab6.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { tab6PageRoutingModule } from './tab6-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    tab6PageRoutingModule
  ],
  declarations: [tab6Page]
})
export class tab6PageModule {}