import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CheckInPage } from '../CheckIn/CheckIn.page';
import {ModalService} from '../services/modal.service';
@Component({
  selector: 'app-HomePage',
  templateUrl: 'HomePage.page.html',
  styleUrls: ['HomePage.page.scss']
})

export class HomePagePage {
  checkinButton: boolean = false;

  constructor(private route: Router, private modalCtrl: ModalController, private modalService: ModalService){
    console.log('HomePagePage constructor, flag: ', this.modalService.modalAlreadyShown);
  }

  async ionViewDidEnter() {
    console.log('Starting to create modal, checkin button: ', this.checkinButton);
    if(this.checkinButton){
      console.log('checkin click')
      const modal = await this.modalCtrl.create({
        component: CheckInPage,   
        cssClass: 'checkin-size',
      });
      modal.present();
      console.log('Modal Created: ', modal);
      const { data, role } = await modal.onWillDismiss();
  
    } else if(!this.modalService.modalAlreadyShown){
      console.log('popup')
      const modal = await this.modalCtrl.create({
        component: CheckInPage,   
        cssClass: 'checkin-size',
      });
      modal.present();
      console.log('Modal Created: ', modal);
      const { data, role } = await modal.onWillDismiss();
      
      this.modalService.modalAlreadyShown = true;
    }
  }

  checkinClick(){
    console.log(this.modalService.modalAlreadyShown)
    this.checkinButton = true;
    this.ionViewDidEnter();
  }
}