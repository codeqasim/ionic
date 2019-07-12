import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Holiday_infoPage } from '../holiday_info/holiday_info';
@Component({
  selector: 'page-holiday_list',
  templateUrl: 'holiday_list.html'
})
export class Holiday_listPage {
  
  constructor(public navCtrl: NavController) {

  }
 
  holiday_info(){
        this.navCtrl.push(Holiday_infoPage)
  } 

}
