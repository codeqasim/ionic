import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { My_profilePage } from '../my_profile/my_profile';
 import { SupportPage } from '../support/support';
 import { About_usPage } from '../about_us/about_us';
 import { ConditionPage } from '../condition/condition';
 import { My_reviewsPage } from '../my_reviews/my_reviews';
 import { SigninPage } from '../signin/signin';
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController) {

  } 
   
  my_profile(){
        this.navCtrl.push(My_profilePage)
  }  
  support(){
        this.navCtrl.push(SupportPage)
  } 
  about_us(){
        this.navCtrl.push(About_usPage)
  }  
  condition(){
        this.navCtrl.push(ConditionPage)
  } 
  my_reviews(){
        this.navCtrl.push(My_reviewsPage)
  }  
  signin(){
        this.navCtrl.setRoot(SigninPage)
  }    

}
