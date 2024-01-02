import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tab8Page } from './tab8.page';

const routes: Routes = [
  {
    path: '',
    component: tab8Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class tab8PageRoutingModule {}