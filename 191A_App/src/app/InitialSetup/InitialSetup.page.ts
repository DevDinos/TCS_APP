import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-InitialSetup',
  templateUrl: 'InitialSetup.page.html',
  styleUrls: ['InitialSetup.page.scss']
})
export class InitialSetupPage {

  constructor(private route: Router){
  }

}