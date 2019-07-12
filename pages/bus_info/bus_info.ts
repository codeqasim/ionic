import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Bus_ticketPage } from '../bus_ticket/bus_ticket';
@Component({
  selector: 'page-bus_info',
  templateUrl: 'bus_info.html'
})
export class Bus_infoPage {
  private seat1 = false;
  private seatB3 = true;
  private seatB4 = false;
  private seatB5 = false;
  private seatB6 = false;
  private seatB8 = false;
  private seatB9 = false;
  private seatB11 = false;
  private seatA1 = false;
  private seatA2 = false;
  private seatA5 = false;
  private seatA6 = false;
  private seatB12 = false;
  private seatB14 = false;
  private seatB18 = false;
  private seatB20 = false;
  private seatA8 = false; 
  private seatA9 = false;
  private seatA11 = false;

  constructor(public navCtrl: NavController) {

  }
 
   toggleBusSeat1(){
   this.seat1 = !this.seat1;
   }
   toggleBusSeatB3(){
   this.seatB3 = !this.seatB3;
   }
   toggleBusSeatB4(){
   this.seatB4 = !this.seatB4;
   }
   toggleBusSeatB5(){
   this.seatB5 = !this.seatB5;
   }
   toggleBusSeatB6(){
   this.seatB6 = !this.seatB6;
   } 
    toggleBusSeatB9(){
   this.seatB9 = !this.seatB9;
   }
   toggleBusSeatB8(){
   this.seatB8 = !this.seatB8;
   }
   toggleBusSeatB11(){
   this.seatB11 = !this.seatB11;
   }
   toggleBusSeatA1(){
   this.seatA1 = !this.seatA1;
   }
   toggleBusSeatA2(){
   this.seatA2 = !this.seatA2;
   }  
   toggleBusSeatA5(){
    this.seatA5 = !this.seatA5;
   }  
   toggleBusSeatA6(){
   this.seatA6 = !this.seatA6;
   } 
   toggleBusSeatB12(){
   this.seatB12 = !this.seatB12;
   } 
   toggleBusSeatB14(){
   this.seatB14 = !this.seatB14;
   } 
   toggleBusSeatB18(){
   this.seatB18 = !this.seatB18;
   } 
   toggleBusSeatB20(){
   this.seatB20 = !this.seatB20;
   } 
   toggleBusSeatA8(){
   this.seatA8 = !this.seatA8;
   } 
   toggleBusSeatA9(){
   this.seatA9 = !this.seatA9;
   } 
   toggleBusSeatA11(){
   this.seatA11 = !this.seatA11;
   } 
    
   
    
  bus_ticket(){
        this.navCtrl.push(Bus_ticketPage)
  } 

}
