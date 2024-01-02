import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Settings',
  templateUrl: 'Settings.page.html',
  styleUrls: ['Settings.page.scss']
})
export class SettingsPage {

  constructor(private route: Router){
  }

}