import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Hotel_infoPage } from '../hotel_info/hotel_info';
@Component({
  selector: 'page-hotels_list',
  templateUrl: 'hotels_list.html'
})
export class Hotels_listPage {

  constructor(public navCtrl: NavController) {

  }
    
 hotel_info(){
        this.navCtrl.push(Hotel_infoPage)
  }  

}
