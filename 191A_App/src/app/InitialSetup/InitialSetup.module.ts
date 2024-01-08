import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InitialSetupPage } from './InitialSetup.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { InitialSetupPageRoutingModule } from './InitialSetup-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    InitialSetupPageRoutingModule
  ],
  declarations: [InitialSetupPage]
})
export class InitialSetupPageModule {}