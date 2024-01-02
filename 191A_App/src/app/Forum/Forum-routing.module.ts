import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumPage } from './Forum.page';

const routes: Routes = [
  {
    path: '',
    component: ForumPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumPageRoutingModule {}