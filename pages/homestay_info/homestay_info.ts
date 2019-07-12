import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Home_reviewsPage } from '../home_reviews/home_reviews';
import { Homestay_bookedPage } from '../homestay_booked/homestay_booked';
@Component({
  selector: 'page-homestay_info',
  templateUrl: 'homestay_info.html'
})
export class Homestay_infoPage {

  constructor(public navCtrl: NavController) {

  }
  home_reviews(){
        this.navCtrl.push(Home_reviewsPage)
  }  
   homestay_booked(){
        this.navCtrl.push(Homestay_bookedPage)
  } 

}
