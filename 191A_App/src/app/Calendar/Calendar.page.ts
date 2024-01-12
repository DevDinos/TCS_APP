import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';
import { CalendarComponent, Step } from 'ionic7-calendar'; //Added for the Calendar
import { CalendarMode } from 'ionic7-calendar';

@Component({
  selector: 'app-Calendar',
  templateUrl: 'Calendar.page.html',
  styleUrls: ['Calendar.page.scss']
})
export class CalendarPage {
  allEvents = [];

  selectedDate: string = '';

  constructor(private route: Router) { 
  }

  onDateSelectionChange(event: any) {
    console.log('Selected Date:', this.selectedDate);
  }



}

//New Class for the Calendar