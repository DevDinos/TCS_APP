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

  navigateTo(destination:any){
    let validDestinations: Array<string> = ["Welcome", "Helpline", "HomePage", "Resources", "Calendar", "Games", "Forum", "Account", "Settings", "AccountCreation", "Login"];

    if (validDestinations.includes(destination)){
      let tempDestination: string = "/tabs/" + destination;
      this.route.navigate([tempDestination]);
    }
  }

}