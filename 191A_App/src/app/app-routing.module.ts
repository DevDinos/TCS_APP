import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ResponsesPage } from './Forum/responses/responses.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },   {
    path: 'check-in2',
    loadChildren: () => import('./check-in2/check-in2.module').then( m => m.CheckIn2PageModule)
  },   {
    path: 'responses',
    loadChildren: () => import('./Forum/responses/responses.module').then( m => m.ResponsesPageModule)
  },
  { path: 'responses/:postId', component: ResponsesPage }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
