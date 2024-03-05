import { Component } from '@angular/core';
import { NavigationService } from '../Services/navigation.service';
import { TabsPage } from '../tabs/tabs.page';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Helpline',
  templateUrl: 'Helpline.page.html',
  styleUrls: ['Helpline.page.scss']
})
export class HelplinePage {

  constructor(private ns: NavigationService, private tabsPage: TabsPage){
  }

  ngOnInit(){
    this.tabsPage.revealTab();
  }

  navigateTo(destination: string){
    this.ns.navigateTo(destination);
  }

}