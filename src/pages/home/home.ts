import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { Search_flightsPage } from '../search_flights/search_flights';
 import { Search_hotelPage } from '../search_hotel/search_hotel';
 import { Search_trainPage } from '../search_train/search_train';
 import { Search_holidayPage } from '../search_holiday/search_holiday';
 import { Search_busPage } from '../search_bus/search_bus';
 import { Search_cabPage } from '../search_cab/search_cab';
 import { Search_homestayPage } from '../search_homestay/search_homestay';
 import { Hotel_infoPage } from '../hotel_info/hotel_info';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
   
    
 search_flights(){
        this.navCtrl.push(Search_flightsPage)
  }  
 search_hotel(){
        this.navCtrl.push(Search_hotelPage)
  }  
 search_train(){
        this.navCtrl.push(Search_trainPage)
  }  
 search_holiday(){
        this.navCtrl.push(Search_holidayPage)
  }  
 search_bus(){
        this.navCtrl.push(Search_busPage)
  }   
 search_cab(){
        this.navCtrl.push(Search_cabPage)
  }  
 search_homestay(){
        this.navCtrl.push(Search_homestayPage)
  }  
 hotel_info(){
        this.navCtrl.push(Hotel_infoPage)
  }  

}
