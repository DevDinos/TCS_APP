import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Account',
  templateUrl: 'Account.page.html',
  styleUrls: ['Account.page.scss']
})
export class AccountPage {

  constructor(private route: Router){
  }

  navigateBack(){
    this.route.navigate(["/tabs/HomePage"]);
  }

}