import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DatePickerModule } from 'ion-datepicker';

import { About_usPage } from '../pages/about_us/about_us';
import { AccountPage } from '../pages/account/account';
import { Bus_infoPage } from '../pages/bus_info/bus_info';
import { Bus_listPage } from '../pages/bus_list/bus_list';
import { Bus_ticketPage } from '../pages/bus_ticket/bus_ticket';
import { Cab_infoPage } from '../pages/cab_info/cab_info';
import { Cab_listPage } from '../pages/cab_list/cab_list';
import { ConditionPage } from '../pages/condition/condition';
import { Confirm_bookingPage } from '../pages/confirm_booking/confirm_booking';
import { FilterPage } from '../pages/filter/filter';
import { Flight_infoPage } from '../pages/flight_info/flight_info';
import { Flight_resultPage } from '../pages/flight_result/flight_result';
import { Flight_ticketPage } from '../pages/flight_ticket/flight_ticket';
import { Holiday_bookedPage } from '../pages/holiday_booked/holiday_booked';
import { Holiday_infoPage } from '../pages/holiday_info/holiday_info';
import { Holiday_listPage } from '../pages/holiday_list/holiday_list';
import { HomePage } from '../pages/home/home';
import { Home_reviewsPage } from '../pages/home_reviews/home_reviews';
import { Homestay_bookedPage } from '../pages/homestay_booked/homestay_booked';
import { Homestay_infoPage } from '../pages/homestay_info/homestay_info';
import { Hotel_bookedPage } from '../pages/hotel_booked/hotel_booked';
import { Hotel_infoPage } from '../pages/hotel_info/hotel_info';
import { Hotel_reviewPage } from '../pages/hotel_review/hotel_review';
import { Hotels_listPage } from '../pages/hotels_list/hotels_list';
import { List_of_homestayPage } from '../pages/list_of_homestay/list_of_homestay';
import { My_bookingsPage } from '../pages/my_bookings/my_bookings';
import { My_profilePage } from '../pages/my_profile/my_profile';
import { My_reviewsPage } from '../pages/my_reviews/my_reviews';
import { Search_busPage } from '../pages/search_bus/search_bus';
import { Search_cabPage } from '../pages/search_cab/search_cab';
import { Search_flightsPage } from '../pages/search_flights/search_flights';
import { Search_holidayPage } from '../pages/search_holiday/search_holiday';
import { Search_homestayPage } from '../pages/search_homestay/search_homestay';
import { Search_hotelPage } from '../pages/search_hotel/search_hotel';
import { Search_trainPage } from '../pages/search_train/search_train';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { SupportPage } from '../pages/support/support';
import { TabsPage } from '../pages/tabs/tabs';
import { Tain_ticketPage } from '../pages/tain_ticket/tain_ticket';
import { Train_infoPage } from '../pages/train_info/train_info';
import { Train_resultPage } from '../pages/train_result/train_result';
import { Verification_codePage } from '../pages/verification_code/verification_code'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    About_usPage,
    AccountPage,
    Bus_infoPage,
    Bus_listPage,
    Bus_ticketPage,
    Cab_infoPage,
    Cab_listPage,
    ConditionPage,
    Confirm_bookingPage,
    FilterPage,
    Flight_infoPage,
    Flight_resultPage,
    Flight_ticketPage,
    Holiday_bookedPage,
    Holiday_infoPage,
    Holiday_listPage,
    HomePage,
    Home_reviewsPage,
    Homestay_bookedPage,
    Homestay_infoPage,
    Hotel_bookedPage,
    Hotel_infoPage,
    Hotel_reviewPage,
    Hotels_listPage,
    List_of_homestayPage,
    My_bookingsPage,
    My_profilePage,
    My_reviewsPage,
    Search_busPage,
    Search_cabPage,
    Search_flightsPage,
    Search_holidayPage,
    Search_homestayPage,
    Search_hotelPage,
    Search_trainPage,
    SigninPage,
    SignupPage,
    SupportPage,
    TabsPage,
    Tain_ticketPage,
    Train_infoPage,
    Train_resultPage,
    Verification_codePage
  ],
   imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    DatePickerModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    About_usPage,
    AccountPage,
    Bus_infoPage,
    Bus_listPage,
    Bus_ticketPage,
    Cab_infoPage,
    Cab_listPage,
    ConditionPage,
    Confirm_bookingPage,
    FilterPage,
    Flight_infoPage,
    Flight_resultPage,
    Flight_ticketPage,
    Holiday_bookedPage,
    Holiday_infoPage,
    Holiday_listPage,
    HomePage,
    Home_reviewsPage,
    Homestay_bookedPage,
    Homestay_infoPage,
    Hotel_bookedPage,
    Hotel_infoPage,
    Hotel_reviewPage,
    Hotels_listPage,
    List_of_homestayPage,
    My_bookingsPage,
    My_profilePage,
    My_reviewsPage,
    Search_busPage,
    Search_cabPage,
    Search_flightsPage,
    Search_holidayPage,
    Search_homestayPage,
    Search_hotelPage,
    Search_trainPage,
    SigninPage,
    SignupPage,
    SupportPage,
    TabsPage,
    Tain_ticketPage,
    Train_infoPage,
    Train_resultPage,
    Verification_codePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
