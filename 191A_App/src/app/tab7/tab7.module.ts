import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tab7Page } from './tab7.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { tab7PageRoutingModule } from './tab7-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    tab7PageRoutingModule
  ],
  declarations: [tab7Page]
})
export class tab7PageModule {}