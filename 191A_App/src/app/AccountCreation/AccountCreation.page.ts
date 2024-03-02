import { Component } from '@angular/core';
import { NavigationService } from '../Services/navigation.service';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-AccountCreation',
  templateUrl: 'AccountCreation.page.html',
  styleUrls: ['AccountCreation.page.scss']
})
export class AccountCreationPage {

  constructor(private ns: NavigationService){
  }

  navigateTo(destination: string){
    this.ns.navigateTo(destination);
  }

}