import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { NavigationService } from '../Services/navigation.service';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Resources',
  templateUrl: 'Resources.page.html',
  styleUrls: ['Resources.page.scss']
})
export class ResourcesPage {

  constructor(private ns: NavigationService, private tabsPage: TabsPage){
  }

  ngOnInit(){
    this.tabsPage.revealTab();
  }

  navigateTo(destination: string){
    this.ns.navigateTo(destination);
  }

}