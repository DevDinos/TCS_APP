import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesPage } from './Games.page';

const routes: Routes = [
  {
    path: '',
    component: GamesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesPageRoutingModule {}