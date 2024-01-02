import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tab6Page } from './tab6.page';

const routes: Routes = [
  {
    path: '',
    component: tab6Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class tab6PageRoutingModule {}