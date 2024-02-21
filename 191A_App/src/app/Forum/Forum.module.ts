import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForumPage } from './Forum.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ForumPageRoutingModule } from './Forum-routing.module';
import { MyAlertComponent } from '../my-alert/my-alert.component';
import { ResponsesPageModule } from './responses/responses.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ForumPageRoutingModule,
  ],
  declarations: [ForumPage]
})
export class ForumPageModule {}