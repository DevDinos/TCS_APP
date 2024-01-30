import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumPage } from './Forum.page';
import { ResponsesPage } from './responses/responses.page'; // Adjust the import path

const routes: Routes = [
  {
    path: '',
    component: ForumPage,
  },
  {
    path: 'responses',
    component: ResponsesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumPageRoutingModule {}