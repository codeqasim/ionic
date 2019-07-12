import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Verification_codePage } from '../verification_code/verification_code';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {

  }

    
  verification_code(){
        this.navCtrl.push(Verification_codePage)
  }  
}
