import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Welcome',
  templateUrl: 'Welcome.page.html',
  styleUrls: ['Welcome.page.scss']
})
export class WelcomePage {

  public baseURL = "sunriseconnectionsserver.mysql.database.azure.com";

  constructor(private route: Router, private httpClient: HttpClient){
  }

  navigateTo(destination:any){
    let validDestinations: Array<string> = ["Welcome", "Helpline", "HomePage", "Resources", "Calendar", "Games", "Forum", "Account", "Settings", "AccountCreation", "Login"];

    if (validDestinations.includes(destination)){
      let tempDestination: string = "/tabs/" + destination;
      this.route.navigate([tempDestination]);
    }
  }


  public getData(): Observable<any>{
    let temp: Observable<any> = this.httpClient.get(this.baseURL)!;
    console.log(temp);
    console.log(temp['source']);
    console.log(temp['operator']);
    return temp;


  }

}