import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagePage } from './HomePage.page';

const routes: Routes = [
  {
    path: '',
    component: HomePagePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePagePageRoutingModule {}