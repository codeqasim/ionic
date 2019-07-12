import { Component } from '@angular/core';

import { AccountPage } from '../account/account';
import { HomePage } from '../home/home';
import { My_bookingsPage } from '../my_bookings/my_bookings';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = My_bookingsPage;
  tab3Root = AccountPage;

  constructor() {

  }
}
 