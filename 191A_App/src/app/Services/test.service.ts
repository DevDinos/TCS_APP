import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

//Source
//https://www.youtube.com/watch?v=cZV3_9oE8to

export class testService{

    constructor(private route: Router, private aRoute: ActivatedRoute) {}

    /*currentPage: String = "None";
  
    revealTab(){
        this.currentPage = "HomePage";
    }

    hideTab(){
        this.currentPage = "None";
    }

    navigateTo(destination:any){
      let validDestinations: Array<string> = ["HomePage", "Forum", "Resources", "Calendar"];
  
      if (validDestinations.includes(destination)){
        let tempDestination: string = "/tabs/" + destination;
        this.route.navigate([tempDestination]);
        this.currentPage = destination;
      }
    }*/


}