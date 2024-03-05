import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { NavigationService } from '../Services/navigation.service';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Account',
  templateUrl: 'Account.page.html',
  styleUrls: ['Account.page.scss']
})
export class AccountPage {

  constructor(private ns: NavigationService, private tabsPage: TabsPage){
  }

  ngOnInit(){
    this.tabsPage.revealTab();
  }

  navigateTo(destination: string){
    this.ns.navigateTo(destination);
  }

}