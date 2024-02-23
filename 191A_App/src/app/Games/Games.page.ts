import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Games',
  templateUrl: 'Games.page.html',
  styleUrls: ['Games.page.scss']
})
export class GamesPage {

  constructor(private route: Router){
  }

  navigateBack(){
    this.route.navigate(["/tabs/HomePage"]);
  }

}