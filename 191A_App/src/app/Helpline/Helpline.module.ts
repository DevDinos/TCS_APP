import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HelplinePage } from './Helpline.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HelplinePageRoutingModule } from './Helpline-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HelplinePageRoutingModule
  ],
  declarations: [HelplinePage]
})
export class HelplinePageModule {}