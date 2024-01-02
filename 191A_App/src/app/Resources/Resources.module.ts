import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourcesPage } from './Resources.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ResourcesPageRoutingModule } from './Resources-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ResourcesPageRoutingModule
  ],
  declarations: [ResourcesPage]
})
export class ResourcesPageModule {}