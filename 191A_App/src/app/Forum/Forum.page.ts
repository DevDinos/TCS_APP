import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { NavController } from 'ionic-angular';
// popover
// import { AlertController, PopoverController } from '@ionic/angular';
// import { MyPopoverComponent } from '../my-popover/my-popover.component';
// import { MyAlertComponent } from '../my-alert/my-alert.component';
import { IonModal, ModalController } from '@ionic/angular';
import { PostModalComponent } from '../post-modal/post-modal.component';

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

  constructor(private route: Router, 
    private modalController: ModalController,
    private renderer: Renderer2
    // private popoverController: PopoverController,
    // private alertController: AlertController
    ){}
  
  // async presentPopover(event: Event) {
  //   const popover = await this.popoverController.create({
  //     component: MyPopoverComponent,
  //     event: event,
  //     translucent: false,
  //   });
  //   return await popover.present();
  // }

  // async presentAlert(event: Event) {
  //   const alert = await this.alertController.create({
  //     header: 'New Post',
  //     buttons: ['Cancel', 'Submit'],
  //     inputs: [
  //       {
  //         placeholder: 'Subject',
  //       },
  //       {
  //         type: 'textarea',
  //         placeholder: 'What is on your mind',
          
  //       },
  //     ],
  //   });

  //   await alert.present();
  //}
  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  createPost() {
    // // Create ion-card element
    // const ionCard = this.renderer.createElement('ion-card');
    
    // // Add ion-card-header and ion-card-content elements (customize as needed)
    // this.renderer.appendChild(ionCard, this.renderer.createElement('ion-card-header'));
    // this.renderer.appendChild(ionCard, this.renderer.createElement('ion-card-content'));
    
    // // Append ion-card to the container
    // this.renderer.appendChild(this.dynamicContentContainer.nativeElement, ionCard);
    this.modalController.dismiss(null, 'cancel');
  }
}