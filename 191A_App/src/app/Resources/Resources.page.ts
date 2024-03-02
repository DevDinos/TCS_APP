import { Component } from '@angular/core';
import { NavigationService } from '../Services/navigation.service';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Resources',
  templateUrl: 'Resources.page.html',
  styleUrls: ['Resources.page.scss']
})
export class ResourcesPage {

  constructor(private ns: NavigationService){
  }

  navigateTo(destination: string){
    this.ns.navigateTo(destination);
  }

}