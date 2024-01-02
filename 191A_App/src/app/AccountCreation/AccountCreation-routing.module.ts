import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreationPage } from './AccountCreation.page';

const routes: Routes = [
  {
    path: '',
    component: AccountCreationPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountCreationPageRoutingModule {}