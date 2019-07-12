import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-holiday_booked',
  templateUrl: 'holiday_booked.html'
})
export class Holiday_bookedPage {
 booking_day: string = "day_a";
  constructor(public navCtrl: NavController) {

  }


}
