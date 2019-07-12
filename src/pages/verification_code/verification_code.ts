import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-verification_code',
  templateUrl: 'verification_code.html'
})
export class Verification_codePage {

  constructor(public navCtrl: NavController) {

  }
    
  tabs(){
        this.navCtrl.setRoot(TabsPage)
  }  

}
