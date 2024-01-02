import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-AccountCreation',
  templateUrl: 'AccountCreation.page.html',
  styleUrls: ['AccountCreation.page.scss']
})
export class AccountCreationPage {

  constructor(private route: Router){
  }

}