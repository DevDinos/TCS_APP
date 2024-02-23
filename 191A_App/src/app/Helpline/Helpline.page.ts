import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Helpline',
  templateUrl: 'Helpline.page.html',
  styleUrls: ['Helpline.page.scss']
})
export class HelplinePage {

  constructor(private route: Router){
  }

  navigateBack(){
    this.route.navigate(["/tabs/HomePage"]);
  }

}