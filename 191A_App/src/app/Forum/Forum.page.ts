import { Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';
// popover
import { AlertController, PopoverController } from '@ionic/angular';
// import { MyPopoverComponent } from '../my-popover/my-popover.component';
// import { MyAlertComponent } from '../my-alert/my-alert.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-Forum',
  templateUrl: 'Forum.page.html',
  styleUrls: ['Forum.page.scss']
})
export class ForumPage {
  // modalController: IonModal;
  // popoverController: any;
  @ViewChild('dynamicContentContainer', { read: ElementRef, static: true })
  dynamicContentContainer!: ElementRef;

  subject: string ='';
  comment: string = '';
  posts: Array<{ subject: string, comment: string}> = [];

  likeCount: number = 0;
  
  isClicked: boolean = false;

  constructor(private route: Router, 
    private modalController: ModalController,
    private renderer: Renderer2,
    private alertController: AlertController
    ){}
  
  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  createPost() {
    // Check if subject and comment are not empty before adding to posts array
    if (this.subject.trim() !== '' && this.comment.trim() !== '') {
      // Add the new post to the array
      this.posts.push({ subject: this.subject, comment: this.comment });

      // Clear the input fields
      this.subject = '';
      this.comment = '';

      // Dismiss the modal
      this.modalController.dismiss(null, 'cancel');
    }
    else{
      // alert
      this.presentAlert();
    }
    
  }

  changeColor() {
    this.isClicked = !this.isClicked;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Missing subject and/or text.',
      subHeader: '',
      message: '',
      buttons: ['Try again'],
    });

    await alert.present();
  }
}