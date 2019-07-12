import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-my_profile',
  templateUrl: 'my_profile.html'
})
export class My_profilePage {
  select_gender: string = "male";
  constructor(public navCtrl: NavController) {

  }

}
