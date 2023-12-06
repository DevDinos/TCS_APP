import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private route: Router){
  }

  goToPage(){
    this.route.navigate(["/tabs/tab2"]);
  }
  /*constructor(private navController:NavController) {}

  goToPage() {
    this.navController.setRoot("/pages/page1.html");
  }*/

}
