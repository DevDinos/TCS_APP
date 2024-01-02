import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Calendar',
  templateUrl: 'Calendar.page.html',
  styleUrls: ['Calendar.page.scss']
})
export class CalendarPage {

  constructor(private route: Router){
  }

}