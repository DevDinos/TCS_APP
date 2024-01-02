import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-CheckIn',
  templateUrl: 'CheckIn.page.html',
  styleUrls: ['CheckIn.page.scss']
})
export class CheckInPage {

  constructor(private route: Router){
  }

}