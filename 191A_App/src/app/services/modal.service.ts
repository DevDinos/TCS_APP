import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ModalService{
    modalAlreadyShown: boolean = false;

    constructor() {
        console.log('ModalService constructor');
        console.log('Flag: ', this.modalAlreadyShown);
    }

    modalShown(){
        this.modalAlreadyShown = true;
    }

    checkModal(){
        return this.modalAlreadyShown;
    }
}
