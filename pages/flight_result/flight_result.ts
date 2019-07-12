import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Flight_infoPage } from '../flight_info/flight_info';
import { FilterPage } from '../filter/filter';
@Component({
  selector: 'page-flight_result',
  templateUrl: 'flight_result.html'
})
export class Flight_resultPage {
ticket_price: string = "1";
  constructor(public navCtrl: NavController) {

  }
  
  
  flight_info(){
        this.navCtrl.push(Flight_infoPage)
  }   
  filter(){
        this.navCtrl.push(FilterPage)
  } 

}
