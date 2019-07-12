import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Cab_infoPage } from '../cab_info/cab_info';
@Component({
  selector: 'page-cab_list',
  templateUrl: 'cab_list.html'
})
export class Cab_listPage {

  constructor(public navCtrl: NavController) {

  }

  cab_info(){
        this.navCtrl.push(Cab_infoPage)
  } 
}
