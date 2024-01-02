import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tab8Page } from './tab8.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { tab8PageRoutingModule } from './tab8-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    tab8PageRoutingModule
  ],
  declarations: [tab8Page]
})
export class tab8PageModule {}