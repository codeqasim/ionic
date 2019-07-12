import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { Homestay_infoPage } from '../homestay_info/homestay_info';
@Component({
  selector: 'page-list_of_homestay',
  templateUrl: 'list_of_homestay.html'
})
export class List_of_homestayPage {

  constructor(public navCtrl: NavController) {

  }
   
  homestay_info(){
        this.navCtrl.push(Homestay_infoPage)
  } 

}
