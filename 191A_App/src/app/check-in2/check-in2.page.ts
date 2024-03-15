import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams} from '@ionic/angular';
@Component({
  selector: 'app-check-in2',
  templateUrl: './check-in2.page.html',
  styleUrls: ['./check-in2.page.scss'],
})
export class CheckIn2Page{
  selectedMood: string = '';
  showPart2: boolean = true;
  imageSelected: string = '';

  constructor(private route: Router, private modalCtrl: ModalController, private navParams: NavParams) {
    this.selectedMood = this.navParams.get('selectedMood');
    this.imageSelected = this.getRandomImage();
   }

  getRandomImage(): string{
    const imgPaths = ['assets/images/nature1.jpg', 'assets/images/nature2.jpg', 'assets/images/nature3.jpg', 'assets/images/nature4.jpg', 'assets/images/nature5.jpg', 'assets/images/nature6.jpg', 'assets/images/nature7.jpg', 'assets/images/nature8.jpg', 'assets/images/nature9.jpg',
    'assets/images/animal1.jpg', 'assets/images/animal2.jpg', 'assets/images/animal3.jpg', 'assets/images/animal4.jpg', 'assets/images/animal5.jpg', 'assets/images/animal6.jpg', 'assets/images/animal7.jpg', 'assets/images/animal8.jpg', 'assets/images/animal9.jpg']
    const random = Math.floor(Math.random() * imgPaths.length);
    return imgPaths[random];
  }

  complete(){
    this.modalCtrl.dismiss({role:'complete'});
  }

  skip(){
    this.modalCtrl.dismiss();
  }

}
