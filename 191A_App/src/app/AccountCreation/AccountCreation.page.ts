import { Component } from '@angular/core';
import { NavigationService } from '../Services/navigation.service';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-AccountCreation',
  templateUrl: 'AccountCreation.page.html',
  styleUrls: ['AccountCreation.page.scss']
})
export class AccountCreationPage {

  zoomFactor = 1;

  constructor(private ns: NavigationService){
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