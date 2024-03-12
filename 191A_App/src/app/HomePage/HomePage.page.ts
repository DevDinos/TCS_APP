import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CheckInPage } from '../CheckIn/CheckIn.page';
import { ModalService } from '../Services/modal.service';
import { TabsPage } from '../tabs/tabs.page';
import { NavigationService } from '../Services/navigation.service';

@Component({
  selector: 'app-HomePage',
  templateUrl: 'HomePage.page.html',
  styleUrls: ['HomePage.page.scss']
})

export class HomePagePage {
  checkinButton: boolean = false;

  zoomFactor = 1;
  constructor(private modalCtrl: ModalController, private modalService: ModalService, private tabsPage: TabsPage, private ns: NavigationService){
    console.log('HomePagePage constructor, flag: ', this.modalService.modalAlreadyShown);
  }

  ngOnInit(){
    this.tabsPage.revealTab();
  }

  navigateTo(destination:any){

    this.ns.navigateTo(destination);

    if (destination == "Welcome"){
      this.tabsPage.hideTab();
    }
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

  // Method to increase font size
zoomIn() {
  this.zoomFactor += 0.1; // Increase zoom factor by 0.1
  document.documentElement.style.setProperty('--zoom-factor', this.zoomFactor.toString()); // Update zoom factor in CSS
}

// Method to decrease font size
zoomOut() {
  this.zoomFactor -= 0.1; // Decrease zoom factor by 0.1
  document.documentElement.style.setProperty('--zoom-factor', this.zoomFactor.toString()); // Update zoom factor in CSS
}
}

