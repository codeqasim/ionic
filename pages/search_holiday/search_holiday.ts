import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Holiday_listPage } from '../holiday_list/holiday_list';

@Component({
  selector: 'page-search_holiday',
  templateUrl: 'search_holiday.html'
})
export class Search_holidayPage {
     month: string = "1";
    structure: any = { lower: 33, upper: 60 };
  constructor(public navCtrl: NavController) {

  }
 holiday_list(){
        this.navCtrl.push(Holiday_listPage)
  } 
}
