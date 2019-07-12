import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Tain_ticketPage } from '../tain_ticket/tain_ticket';
@Component({
  selector: 'page-train_info',
  templateUrl: 'train_info.html'
})
export class Train_infoPage {

  constructor(public navCtrl: NavController) {

  }

  tain_ticket(){
        this.navCtrl.push(Tain_ticketPage)
  } 
}
