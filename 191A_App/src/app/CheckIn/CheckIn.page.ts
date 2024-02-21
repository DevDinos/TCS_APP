import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CheckIn2Page } from '../check-in2/check-in2.page';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-CheckIn',
  templateUrl: 'CheckIn.page.html',
  styleUrls: ['CheckIn.page.scss']
})
export class CheckInPage {
  showPart1: boolean = true;
  name: string = '';
  selectedMood: string = '';

  constructor(private route: Router, private modalCtrl: ModalController){
  }
  
  async showPart2() {
    await this.modalCtrl.dismiss();
    
    const modal = await this.modalCtrl.create({
      component: CheckIn2Page,
      cssClass: 'checkin-size',
      componentProps:{
        selectedMood: this.selectedMood
      }
    });

    modal.onWillDismiss().then((result) => {
      if (result.role === 'complete') {
        // Handle completion logic if needed
        console.log('Modal complete')
        this.modalCtrl.dismiss()
      } else if(result.role === 'skip'){
        // Handle other actions if needed
        console.log('Modal Skipped')
        this.modalCtrl.dismiss();
      }
    });

    await modal.present();
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  selectMood(mood:string){
    this.selectedMood = mood;
  }
}
