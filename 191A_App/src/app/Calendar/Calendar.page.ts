import { Component } from '@angular/core';
import { NavigationService } from '../Services/navigation.service';
//import { NavController } from 'ionic-angular';
//import { CalendarComponent, Step } from 'ionic7-calendar'; //Added for the Calendar
//import { CalendarMode } from 'ionic7-calendar';

@Component({
  selector: 'app-Calendar',
  templateUrl: 'Calendar.page.html',
  styleUrls: ['Calendar.page.scss']
})
export class CalendarPage {
  allEvents = new Map<string, string[]>();

  selectedDate: string = '';

  formattedDate: string = '';

  selectedEvents: any[] = [];

  myDate: String = new Date().toISOString();

  selectedTab: String = "Your Events";

  constructor(private ns: NavigationService) { 
    this.allEvents.set("Fri Jan 12 2024", ["12:00pm;Party at Eliza's House; Sunrise St, Sunset Beach, CA, USA", 
                                          "3:00pm;Book club meeting at Rick's place.; Coral St, Sunset Beach, CA, USA"]);
    this.allEvents.set("Sun Jan 14 2024", ["1:00pm;Polo at Sunnyside Park.; Sunrise St, Sunset Beach, CA, USA", 
                                          "4:00pm;Hike by the Beach.; Coral St, Sunset Beach, CA, USA"]);
  }

  navigateTo(destination: string){
    this.ns.navigateTo(destination);
  }

  onDateSelectionChange(event: any) {
    //console.log('Selected Date:', this.selectedDate);
    console.log("Selected Date:", new Date(Date.parse(this.selectedDate)))
    this.formattedDate = (new Date(Date.parse(this.selectedDate))).toDateString();
    console.log("Selected Date (Parsed):", this.formattedDate);
    this.selectedEvents = [];
    if (this.allEvents.has(this.formattedDate)){
      //this.selectedEvents = this.allEvents.get(this.formattedDate)!;
      //console.log("Found!");
      let onEvent = this.allEvents.get(this.formattedDate)
      for (let i = 0; i < onEvent!.length; i++){
        let temp = onEvent![i].split(";");
        this.selectedEvents.push(temp);
      }

    }
  }

  tabSelection(tabName: String){
    //console.log(tabName);
    this.selectedTab = tabName;
  }

}

//New Class for the Calendar