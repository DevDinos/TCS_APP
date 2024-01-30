import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.page.html',
  styleUrls: ['./responses.page.scss'],
})
export class ResponsesPage implements OnInit {
  username: string ='';
  message: string = '';
  comments: Array<{ username: string, message: string}> = [];

  constructor(private alertController: AlertController) { }

  createComment() {
    // Check if subject and comment are not empty before adding to posts array
    if (this.username.trim() !== '' && this.message.trim() !== '') {
      // Add the new post to the array
      this.comments.push({ username: this.username, message: this.message });

      // Clear the input fields
      this.username = '';
      this.message = '';
    }
    else{
      // alert
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Missing username and/or comment.',
      subHeader: '',
      message: '',
      buttons: ['Try again'],
    });

    await alert.present();
  }

  openReply() {

  }

  ngOnInit() {
  }

}
