import { Component } from '@angular/core';
import { NavigationService } from '../Services/navigation.service';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Helpline',
  templateUrl: 'Helpline.page.html',
  styleUrls: ['Helpline.page.scss']
})
export class HelplinePage {

  constructor(private ns: NavigationService){
  }

  navigateTo(destination: string){
    this.ns.navigateTo(destination);
  }

}