import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Login',
  templateUrl: 'Login.page.html',
  styleUrls: ['Login.page.scss']
})
export class LoginPage {

  constructor(private route: Router){
  }

  navigateBack(){
    this.route.navigate(['/tabs/Welcome'])
  }

}