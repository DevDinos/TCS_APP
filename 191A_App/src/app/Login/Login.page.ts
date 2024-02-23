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

  navigateTo(destination:any){
    let validDestinations: Array<string> = ["Welcome", "Helpline", "HomePage", "Resources", "Calendar", "Games", "Forum", "Account", "Settings"];

    if (validDestinations.includes(destination)){
      let tempDestination: string = "/tabs/" + destination;
      this.route.navigate([tempDestination]);
    }
  }

}