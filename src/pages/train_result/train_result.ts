import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Train_infoPage } from '../train_info/train_info';
@Component({
  selector: 'page-train_result',
  templateUrl: 'train_result.html'
})
export class Train_resultPage {

  constructor(public navCtrl: NavController) {

  }
  
  train_info(){
        this.navCtrl.push(Train_infoPage)
  } 


}
