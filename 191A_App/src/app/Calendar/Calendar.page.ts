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

  selectedEvents: any[] = [];

  myDate: String = new Date().toISOString();

  selectedTab: string = "Events";

  zoomFactor = 1;
  
  eventTitle: string = '';
  eventTime: string ='';
  eventDescription: string = '';
  eventLocation: string = '';

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

  getDateFromCal(){
    console.log("Selected Date:", new Date(Date.parse(this.selectedDate)));
    let formattedDate: string = (new Date(Date.parse(this.selectedDate))).toDateString();
    console.log("Selected Date (Parsed):", formattedDate);
    return formattedDate;
  }

  refreshSelectedEvents(eventsType: string, formattedDate: string){
    console.log("Refresh Selected Events");
    console.log("allMyEvents: " + this.allMyEvents.get(formattedDate));
    this.selectedEvents = [];
    if (eventsType == "Events"){
      console.log(this.allEvents.has(formattedDate));
      if (this.allEvents.has(formattedDate)){
        let onEvent = this.allEvents.get(formattedDate);
        console.log(onEvent);
        for (let i = 0; i < onEvent!.length; i++){
          let temp = onEvent![i].split(";");
          this.selectedEvents.push(temp);
        }
      }
    }
    else if (eventsType == "Your Events"){
      console.log(this.allMyEvents.has(formattedDate));
      if (this.allMyEvents.has(formattedDate)){
        let onEvent = this.allMyEvents.get(formattedDate);
        console.log(onEvent);
        if (onEvent!.length != 0){
          for (let i = 0; i < onEvent!.length; i++){
            let temp = onEvent![i].split(";");
            this.selectedEvents.push(temp);
          }
        }
      }
    }
  }

  onTabSelectionChange(tabName: string){
    console.log("Switching selectedTab to: " + tabName);
    this.selectedTab = tabName;
    let formattedDate: string = this.getDateFromCal();
    this.refreshSelectedEvents(this.selectedTab, formattedDate);
  }

  onDateSelectionChange(event: any) {
    console.log("Retrieving Date from Calendar");
    let formattedDate: string = this.getDateFromCal();
    this.refreshSelectedEvents(this.selectedTab, formattedDate);
  }

  addEvent(event: string[]){
    console.log("Adding Event");
    let eventStr: string = event.join(";");
    let formattedDate: string = this.getDateFromCal();
    console.log(eventStr);
    if (!this.allMyEvents.has(formattedDate)){
      this.allMyEvents.set(formattedDate, [eventStr]);
    }
    else{
      let onEvent: string[] = this.allMyEvents.get(formattedDate)!;
      console.log(onEvent);
      if (onEvent!.length != 0){
        for (let i = 0; i < onEvent!.length; i++){
          if (onEvent![i] == eventStr){
            return;
          }
        }
      }
      onEvent.push(eventStr);
      this.allMyEvents.set(formattedDate, onEvent);
    }
    console.log(this.allMyEvents);
  }

  removeEvent(event: string[]){
    console.log("Removing Event");
    let eventStr: string = event.join(";");
    let formattedDate: string = this.getDateFromCal();
    console.log(eventStr);
    if (this.allMyEvents.has(formattedDate)){
      console.log("allMyEvents has formattedDate!");
      console.log(this.allMyEvents.get(formattedDate));
      let onEvent = this.allMyEvents.get(formattedDate);
      for (let i = 0; i < onEvent!.length; i++){
        console.log("Looking for Event!");
        if (onEvent![i] == eventStr){
          console.log("Actually Removing - Splicing!");
          onEvent!.splice(i, 1);
          let formattedDate: string = this.getDateFromCal();
          this.refreshSelectedEvents(this.selectedTab, formattedDate);
          return;
        }
      }
    }
  }

  makeNewEvent(){
    console.log("Making Event");
    let formattedDate: string = this.getDateFromCal();
    this.refreshSelectedEvents(this.selectedTab, formattedDate);
    if(!this.allEvents.has(formattedDate)){
      this.allEvents.set(formattedDate, [this.eventTime+"; "+this.eventTitle+": "+this.eventDescription+";"+this.eventLocation]);
    }
    else{
      this.allEvents.get(formattedDate)?.push(this.eventTime+"; "+this.eventTitle+": "+this.eventDescription+";"+this.eventLocation)
    }

    this.addEvent([this.eventTime+"", this.eventTitle+": "+this.eventDescription, this.eventLocation])

    console.log(this.allEvents.get(formattedDate));

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