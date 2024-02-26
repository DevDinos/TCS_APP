import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Welcome',
  templateUrl: 'Welcome.page.html',
  styleUrls: ['Welcome.page.scss']
})
export class WelcomePage {

  constructor(private route: Router){
  }

  /*navigate(){
    this.route.navigate(['/tabs/Login'])
  }*/

  navigateLogIn(){
    this.route.navigate(['/tabs/Login'])
  }
  navigateAccountCreation(){
    this.route.navigate(['/tabs/AccountCreation'])
  }
}