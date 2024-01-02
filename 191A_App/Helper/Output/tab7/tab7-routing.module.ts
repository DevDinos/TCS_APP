import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tab7Page } from './tab7.page';

const routes: Routes = [
  {
    path: '',
    component: tab7Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class tab7PageRoutingModule {}