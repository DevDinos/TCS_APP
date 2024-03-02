import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NavigationService } from '../Services/navigation.service';

//Source:
// https://stackoverflow.com/questions/74651790/how-to-update-the-variable-value-in-the-component-in-angular

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private aRoute: ActivatedRoute, private ns: NavigationService) {}

  currentPage: String = "None";

  revealTab(){
    this.currentPage = "HomePage";
  }

  hideTab(){
      this.currentPage = "None";
  }

  ngOnInit(){
    console.log(this.ns.getUrl());
  }

  navigateTo(destination:any){
    this.ns.navigateTo(destination);

    this.currentPage = destination;
  }

  public setCurrentPage(currentPage: string){
    this.currentPage = currentPage;
  }
  
}
