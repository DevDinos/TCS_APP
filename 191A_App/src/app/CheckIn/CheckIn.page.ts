import { Component } from '@angular/core';
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
  moodTrue: boolean = false;
  skipTrue: boolean = false;

  constructor(private modalCtrl: ModalController){
  }

  ngOnInit(){
    this.skipTrue = false;
  }
  
  async showPart2() {
    if(this.skipTrue === true){
      await this.modalCtrl.dismiss();
    
      const modal = await this.modalCtrl.create({
        component: CheckIn2Page,
        cssClass: 'checkin-size',
        componentProps:{
          selectedMood: this.selectedMood,
          submitDate: new Date()
        }
      });

      modal.onWillDismiss().then((result) => {
        if (result.role === 'complete') {
          console.log('Modal complete')
          this.modalCtrl.dismiss()
        } else if(result.role === 'skip'){
          console.log('Modal Skipped')
          this.modalCtrl.dismiss();
        }
      });

      await modal.present();
      this.submitTime();
    }

    if(!this.moodTrue){
      console.log('no mood')
      return;
    } 

    console.log('submitted')
    await this.modalCtrl.dismiss();
    
    const modal = await this.modalCtrl.create({
      component: CheckIn2Page,
      cssClass: 'checkin-size',
      componentProps:{
        selectedMood: this.selectedMood,
        submitDate: new Date()
      }
    });
  
    modal.onWillDismiss().then((result) => {
      if (result.role === 'complete') {
        console.log('Modal complete')
        this.modalCtrl.dismiss()
      } else if(result.role === 'skip'){
        console.log('Modal Skipped')
        this.modalCtrl.dismiss();
      }
    });
  
    await modal.present();
    this.submitTime();
  }

  selectMood(mood:string){
    if(this.selectedMood === mood){
      this.selectedMood = '';
      this.moodTrue = false;
    } else{
      this.selectedMood = mood;
      this.moodTrue = true;
    }
  }

  skipMood(){
    console.log(this.skipTrue)
    console.log('skipped')
    this.skipTrue = true;
    this.showPart2();
  }

  submitTime(){
    const submitDate = new Date();
    console.log('Current Date & Time is: ', submitDate, ', and mood selected is: ', this.selectedMood);
  }
}
