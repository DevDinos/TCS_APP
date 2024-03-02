import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { NavigationService } from '../Services/navigation.service';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-InitialSetup',
  templateUrl: 'InitialSetup.page.html',
  styleUrls: ['InitialSetup.page.scss']
})
export class InitialSetupPage{
  pageIndex: number = 0;

  constructor(private ts: TabsPage, private ns: NavigationService){

  }

  navigateTo(destination: string){

    this.ns.navigateTo(destination);

    if (destination == "HomePage"){
      this.pageIndex = 0;
      this.ts.revealTab();
    }
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