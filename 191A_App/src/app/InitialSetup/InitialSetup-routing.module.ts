import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialSetupPage } from './InitialSetup.page';

const routes: Routes = [
  {
    path: '',
    component: InitialSetupPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialSetupPageRoutingModule {}