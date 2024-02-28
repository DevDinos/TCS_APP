import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

//Source:
// https://stackoverflow.com/questions/74651790/how-to-update-the-variable-value-in-the-component-in-angular

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private route: Router, private aRoute: ActivatedRoute) {}

  currentPage: String = "None";

  revealTab(){
    this.currentPage = "HomePage";
  }

  hideTab(){
      this.currentPage = "None";
  }

  ngOnInit(){
    console.log(this.route.url);
  }

  navigateTo(destination:any){
    let validDestinations: Array<string> = ["HomePage", "Forum", "Resources", "Calendar"];

    if (validDestinations.includes(destination)){
      let tempDestination: string = "/tabs/" + destination;
      this.route.navigate([tempDestination]);
      this.currentPage = destination;
    }
  }
  
}
