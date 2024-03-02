import { Component } from '@angular/core';
import { NavigationService } from '../Services/navigation.service';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Settings',
  templateUrl: 'Settings.page.html',
  styleUrls: ['Settings.page.scss']
})
export class SettingsPage {

  constructor(private ns: NavigationService){
  }

  navigateTo(destination: string){
    this.ns.navigateTo(destination);
  }

}