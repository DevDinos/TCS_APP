import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Source
//https://www.youtube.com/watch?v=cZV3_9oE8to

@Injectable({

  providedIn:'root'

})

export class testService{
    public baseURL = "sunriseconnectionsserver.mysql.database.azure.com";

    constructor(private route: Router, private aRoute: ActivatedRoute, private httpClient: HttpClient) {}

    public getData(): any{
      return this.httpClient.get(this.baseURL)


    }

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