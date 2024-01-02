import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then(m => m.Tab5PageModule)
      },
      {
        path: 'HomePage',
        loadChildren: () => import('../HomePage/HomePage.module').then(m => m.HomePagePageModule)
      },
      {
          path: 'Calendar',
          loadChildren: () => import('../Calendar/Calendar.module').then(m => m.CalendarPageModule)
      },
      {
          path: 'Resources',
          loadChildren: () => import('../Resources/Resources.module').then(m => m.ResourcesPageModule)
      },
      {
          path: 'Helpline',
          loadChildren: () => import('../Helpline/Helpline.module').then(m => m.HelplinePageModule)
      },
      {
          path: 'Forum',
          loadChildren: () => import('../Forum/Forum.module').then(m => m.ForumPageModule)
      },
      {
          path: 'Account',
          loadChildren: () => import('../Account/Account.module').then(m => m.AccountPageModule)
      },
      {
          path: 'Games',
          loadChildren: () => import('../Games/Games.module').then(m => m.GamesPageModule)
      },
      {
          path: 'Settings',
          loadChildren: () => import('../Settings/Settings.module').then(m => m.SettingsPageModule)
      },
      {
          path: 'CheckIn',
          loadChildren: () => import('../CheckIn/CheckIn.module').then(m => m.CheckInPageModule)
      },
      {
          path: 'Login',
          loadChildren: () => import('../Login/Login.module').then(m => m.LoginPageModule)
      },
      {
          path: 'AccountCreation',
          loadChildren: () => import('../AccountCreation/AccountCreation.module').then(m => m.AccountCreationPageModule)
      },
      {
          path: 'Welcome',
          loadChildren: () => import('../Welcome/Welcome.module').then(m => m.WelcomePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
