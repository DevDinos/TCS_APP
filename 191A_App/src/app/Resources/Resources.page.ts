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
  zoomFactor = 1;

  ngOnInit(){
    this.tabsPage.revealTab();
  }

  navigateTo(destination: string){
    this.ns.navigateTo(destination);
  }

  // Method to increase font size
  zoomIn() {
    this.zoomFactor += 0.1; // Increase zoom factor by 0.1
    document.documentElement.style.setProperty('--zoom-factor', this.zoomFactor.toString()); // Update zoom factor in CSS
  }

  // Method to decrease font size
  zoomOut() {
    this.zoomFactor -= 0.1; // Decrease zoom factor by 0.1
    document.documentElement.style.setProperty('--zoom-factor', this.zoomFactor.toString()); // Update zoom factor in CSS
  }

}