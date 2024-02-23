import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CheckInPage } from '../CheckIn/CheckIn.page';
@Component({
  selector: 'app-HomePage',
  templateUrl: 'HomePage.page.html',
  styleUrls: ['HomePage.page.scss']
})
export class HomePagePage {
  message = ""

  constructor(private route: Router, private modalCtrl: ModalController){
    console.log('HomePagePage constructor');
  }

  navigateTo(destination:any){
    let validDestinations: Array<string> = ["Welcome", "Helpline", "Resources", "Calendar", "Games", "Forum", "Account", "Settings"];

    if (validDestinations.includes(destination)){
      let tempDestination: string = "/tabs/" + destination;
      this.route.navigate([tempDestination]);
    }
  }



  async ionViewDidEnter() {
    console.log('Starting to create modal');
    const modal = await this.modalCtrl.create({
      component: CheckInPage,   
      cssClass: 'checkin-size',
    });
    modal.present();
    console.log('Modal Created: ', modal);
    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    } else{
      this.message = '';
    }
  }
}