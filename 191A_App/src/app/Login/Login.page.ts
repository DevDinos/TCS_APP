import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { NavigationService } from '../Services/navigation.service';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Login',
  templateUrl: 'Login.page.html',
  styleUrls: ['Login.page.scss']
})
export class LoginPage {

  constructor(private ts: TabsPage, private ns: NavigationService){
  }

  navigateTo(destination: string){
    this.ns.navigateTo(destination);

    if (destination == "HomePage"){
      this.ts.revealTab();
    }
  }

}