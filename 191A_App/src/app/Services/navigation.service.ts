import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class NavigationService{
    private validDestinations: Array<string> = ["Welcome", "Helpline", "HomePage", "Resources", "Calendar", "Games", "Forum", "Account", "Settings", "AccountCreation", "Login", "InitialSetup"];

    constructor(private route: Router){}

    public isValid(destination: string): boolean{
        return this.validDestinations.includes(destination);
    }

    public navigateTo(destination: string){
        console.log(this.isValid(destination));
        if (this.isValid(destination)){
            let tempDestination: string = "/tabs/" + destination;
            this.route.navigate([tempDestination]);
        }
    }

    public getUrl(): string{
        return this.route.url;
    }
}