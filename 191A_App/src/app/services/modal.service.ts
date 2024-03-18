import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ModalService{
    modalAlreadyShown: boolean = false;
    static n = 0;

    constructor() {
        console.log('ModalService constructor', "modal has been shown: ", this.modalAlreadyShown);
        console.log(ModalService.n)
        if(ModalService.n > 1){
            this.modalAlreadyShown = true;
        } else{
            ModalService.n = ModalService.n + 1;
            this.modalAlreadyShown = false;
        }
        console.log(ModalService.n)
    }
}
