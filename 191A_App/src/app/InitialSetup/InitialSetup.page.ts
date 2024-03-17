import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { NavigationService } from '../Services/navigation.service';
import { AlertController } from '@ionic/angular';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-InitialSetup',
  templateUrl: 'InitialSetup.page.html',
  styleUrls: ['InitialSetup.page.scss']
})
export class InitialSetupPage{
  pageIndex: number = 0;
  // alertController: any;
  zoomFactor = 1;
  constructor(private ts: TabsPage, private ns: NavigationService, private alertController:AlertController){
  }

  navigateTo(destination: string){

    this.ns.navigateTo(destination);

    if (destination == "HomePage"){
      this.pageIndex = 0;
      this.ts.revealTab();
    }
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

  // alert for skipping
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure you want to skip?',
      subHeader: '',
      message: '',
      buttons: [{
        text: 'Yes',
        handler: () => {
          // Navigate to another page
          this.navigateTo('HomePage');
        }
      }, 'Cancel']
    });
    // Call the present method to display the alert
    await alert.present();
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