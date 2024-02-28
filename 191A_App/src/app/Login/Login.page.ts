import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Login',
  templateUrl: 'Login.page.html',
  styleUrls: ['Login.page.scss']
})
export class LoginPage {

  constructor(private route: Router, private tabsPage: TabsPage){
  }

  navigateTo(destination:any){
    let validDestinations: Array<string> = ["Welcome", "Helpline", "HomePage", "Resources", "Calendar", "Games", "Forum", "Account", "Settings"];

    if (validDestinations.includes(destination)){
      if (destination == "HomePage"){
        this.tabsPage.revealTab();
      }
      let tempDestination: string = "/tabs/" + destination;
      this.route.navigate([tempDestination]);
    }
  }

}