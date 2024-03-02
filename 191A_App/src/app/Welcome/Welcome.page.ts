import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavigationService } from '../Services/navigation.service';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Welcome',
  templateUrl: 'Welcome.page.html',
  styleUrls: ['Welcome.page.scss']
})
export class WelcomePage {

  public baseURL = "sunriseconnectionsserver.mysql.database.azure.com";

  constructor(private httpClient: HttpClient, private ns: NavigationService){
  }

  navigateTo(destination: string){
    this.ns.navigateTo(destination);
  }


  public getData(): Observable<any>{
    let temp: Observable<any> = this.httpClient.get(this.baseURL)!;
    console.log(temp);
    console.log(temp['source']);
    console.log(temp['operator']);
    return temp;


  }

}