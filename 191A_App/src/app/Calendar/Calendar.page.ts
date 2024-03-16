import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
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
  allMyEvents = new Map<string, string[]>();

  selectedDate: string = '';

  formattedDate: string = '';

  selectedEvents: any[] = [];

  myDate: String = new Date().toISOString();

  selectedTab: String = "Events";

  zoomFactor = 1;
  
  constructor(private ns: NavigationService, private tabsPage: TabsPage) { 
    this.allEvents.set("Fri Jan 12 2024", ["12:00pm;Party at Eliza's House; Sunrise St, Sunset Beach, CA, USA", 
                                          "3:00pm;Book club meeting at Rick's place.; Coral St, Sunset Beach, CA, USA",
                                          "4:00pm;Stamp collection meeting at Renoir's place.; Duponte Lane, St. Petersburg, FL, USA"]);
    this.allEvents.set("Sun Jan 14 2024", ["1:00pm;Polo at Sunnyside Park.; Sunrise St, Sunset Beach, CA, USA", 
                                          "4:00pm;Hike by the Beach.; Coral St, Sunset Beach, CA, USA"]);
  }

  ngOnInit(){
    this.tabsPage.revealTab();
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
    console.log(tabName);
    this.selectedTab = tabName;
    console.log(this.allMyEvents);
    if (this.selectedTab == 'Events'){
      this.onDateSelectionChange("None");
    }
    else {
      /*this.selectedEvents = [];
      let keys = this.allMyEvents.keys();
      console.log(keys);
      console.log("Else!!!");
      keys.forEach((key) => {
        console.log("Hello");
        this.allMyEvents.get(key)?.forEach((strObj) => {
          console.log("Hello Again");
          let temp = strObj!.split(";");
          this.selectedEvents.push(temp);
        });
      });*/
      this.selectedEvents = [];
      console.log("Else!!!");
      this.allMyEvents.forEach((value: string[], key: string, map: Map<string, string[]>) => {
        console.log(key);
        this.allMyEvents.get(key)?.forEach((strObj) => {
          console.log("Hello Again");
          let temp = strObj!.split(";");
          this.selectedEvents.push(temp);
        });
    });
    }
  }

  addEvent(event: string[]){
    let eventStr = event.join(";");
    console.log(this.formattedDate);
    console.log(event);
    if (!this.allMyEvents.has(this.formattedDate)){
      this.allMyEvents.set(this.formattedDate, [eventStr])
    }
    else{
      let tempEvents: string[] = this.allMyEvents.get(this.formattedDate)||[];
      tempEvents.push(eventStr);
      this.allMyEvents.set(this.formattedDate, tempEvents);
    }
    console.log("Adding");
    console.log(this.allMyEvents);
  }

  removeEvent(event: string[]){
    let eventStr = event.join(";");
    console.log(this.formattedDate);
    console.log(event);
    /*this.selectedEvents.forEach((currentEvent) => {
      if (event.join(";") == currentEvent.join(";")){
        delete this.selectedEvents[i];
        return;
      }
      i += 1;
    });*/
    this.allMyEvents.forEach((value: string[], key: string, map: Map<string, string[]>) => {
      console.log(key);
      if (key == this.formattedDate){
        let i: number = 0;
        this.allMyEvents.get(key)?.forEach((strObj) => {
          if (strObj == eventStr){
            delete this.allMyEvents.get(key)![i]
            return;
          }
          i += 1;
        });
      }
    });
    this.tabSelection('Your Events');
  }

  // Method to increase font size
  zoomIn() {
    this.zoomFactor += 0.1; // Increase zoom factor by 0.1
    document.documentElement.style.setProperty('--zoom-factor', this.zoomFactor.toString()); // Update zoom factor in CSS
  }

  // Method to decrease font size
  zoomOut() {
    this.zoomFactor -= 0.1; // Decrease zoom factor by 0.1
    document.documentElement.style.setProperty('--zoom-factor', this.zoomFactor.toString()); // Update zoom factor in CSS
  }
}

//New Class for the Calendar