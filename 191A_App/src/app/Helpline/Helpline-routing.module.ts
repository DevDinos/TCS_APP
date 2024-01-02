import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelplinePage } from './Helpline.page';

const routes: Routes = [
  {
    path: '',
    component: HelplinePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelplinePageRoutingModule {}