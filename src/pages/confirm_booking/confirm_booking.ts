import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Flight_ticketPage } from '../flight_ticket/flight_ticket';
@Component({
  selector: 'page-confirm_booking',
  templateUrl: 'confirm_booking.html'
})
export class Confirm_bookingPage {

  constructor(public navCtrl: NavController) {

  }
  
flight_ticket(){
        this.navCtrl.push(Flight_ticketPage)
  }  
    

}
