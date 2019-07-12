import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Confirm_bookingPage } from '../confirm_booking/confirm_booking';
@Component({
  selector: 'page-flight_info',
  templateUrl: 'flight_info.html'
})
export class Flight_infoPage {

  constructor(public navCtrl: NavController) {

  }

  confirm_booking(){
        this.navCtrl.push(Confirm_bookingPage)
  }  
}
