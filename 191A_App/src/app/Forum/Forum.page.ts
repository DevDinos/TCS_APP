import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Forum',
  templateUrl: 'Forum.page.html',
  styleUrls: ['Forum.page.scss']
})
export class ForumPage {

  constructor(private route: Router){
  }

}