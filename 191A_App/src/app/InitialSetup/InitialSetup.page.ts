import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-InitialSetup',
  templateUrl: 'InitialSetup.page.html',
  styleUrls: ['InitialSetup.page.scss']
})
export class InitialSetupPage{
  pageIndex: number = 0;

  constructor(private route: Router){

  }

  navigateFinish(){
    this.route.navigate(["/tabs/HomePage"]);
  }

  forward(){
    if (this.pageIndex < 3){
      this.pageIndex++;
    }
  }

  backward(){
    if (this.pageIndex > 0){
      this.pageIndex--;
    }
  }

  skipSetup(){
    if (this.pageIndex == 0){
      this.pageIndex = 3;
    }
    else{
      this.forward()
    }
  }
}