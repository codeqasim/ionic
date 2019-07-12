import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FilterPage } from '../filter/filter';
import { Bus_infoPage } from '../bus_info/bus_info';
@Component({
  selector: 'page-bus_list',
  templateUrl: 'bus_list.html'
})
export class Bus_listPage {

  constructor(public navCtrl: NavController) {

  }
    
  filter(){
        this.navCtrl.push(FilterPage)
  }     
  bus_info(){
        this.navCtrl.push(Bus_infoPage)
  } 

}
