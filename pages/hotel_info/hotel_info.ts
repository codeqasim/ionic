import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Hotel_reviewPage } from '../hotel_review/hotel_review';
import { Hotel_bookedPage } from '../hotel_booked/hotel_booked';
@Component({
  selector: 'page-hotel_info',
  templateUrl: 'hotel_info.html'
})
export class Hotel_infoPage {

  constructor(public navCtrl: NavController) {

  }

  hotel_review(){
        this.navCtrl.push(Hotel_reviewPage)
  }   
    
  hotel_booked(){
        this.navCtrl.push(Hotel_bookedPage)
  }  
}
