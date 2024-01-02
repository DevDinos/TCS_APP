import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-HomePage',
  templateUrl: 'HomePage.page.html',
  styleUrls: ['HomePage.page.scss']
})
export class HomePagePage {

  constructor(private route: Router){
  }

}