import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountCreationPage } from './AccountCreation.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AccountCreationPageRoutingModule } from './AccountCreation-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AccountCreationPageRoutingModule
  ],
  declarations: [AccountCreationPage]
})
export class AccountCreationPageModule {}