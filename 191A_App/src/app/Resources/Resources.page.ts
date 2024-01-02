import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Resources',
  templateUrl: 'Resources.page.html',
  styleUrls: ['Resources.page.scss']
})
export class ResourcesPage {

  constructor(private route: Router){
  }

}