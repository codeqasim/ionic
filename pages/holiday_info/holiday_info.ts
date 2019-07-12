import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Holiday_bookedPage } from '../holiday_booked/holiday_booked';
@Component({
  selector: 'page-holiday_info',
  templateUrl: 'holiday_info.html'
})
export class Holiday_infoPage {
 booking_day: string = "day_a";
  constructor(public navCtrl: NavController) {

  }
  
  holiday_booked(){
        this.navCtrl.push(Holiday_bookedPage)
  } 

}
