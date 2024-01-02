import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePagePage } from './HomePage.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HomePagePageRoutingModule } from './HomePage-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomePagePageRoutingModule
  ],
  declarations: [HomePagePage]
})
export class HomePagePageModule {}