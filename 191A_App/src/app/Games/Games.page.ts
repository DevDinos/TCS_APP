import { Component } from '@angular/core';
import { NavigationService } from '../Services/navigation.service';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Games',
  templateUrl: 'Games.page.html',
  styleUrls: ['Games.page.scss']
})
export class GamesPage {

  constructor(private ns: NavigationService){
  }

  navigateTo(destination: string){
    this.ns.navigateTo(destination);
  }

}