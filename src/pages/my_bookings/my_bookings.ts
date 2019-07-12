import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-my_bookings',
  templateUrl: 'my_bookings.html'
})
export class My_bookingsPage {
  bookings: string = "all_bookings";
  constructor(public navCtrl: NavController) {

  }

}
