import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckIn2Page } from './check-in2.page';

const routes: Routes = [
  {
    path: '',
    component: CheckIn2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckIn2PageRoutingModule {}
