import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-InitialSetup',
  templateUrl: 'InitialSetup.page.html',
  styleUrls: ['InitialSetup.page.scss']
})
export class InitialSetupPage{
  pageIndex: number = 0;

  constructor(private route: Router, private tabsPage: TabsPage){

  }

  navigateFinish(){
    this.route.navigate(["/tabs/HomePage"]);
    this.tabsPage.revealTab();
  }

  forward(){
    if (this.pageIndex < 3){
      this.pageIndex++;
    }
  }

  backward(){
    if (this.pageIndex > 0){
      this.pageIndex--;
    }
  }

  skipSetup(){
    if (this.pageIndex == 0){
      this.pageIndex = 3;
    }
    else{
      this.forward()
    }
  }
}