import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePickerDirective } from 'ion-datepicker';
import { Hotels_listPage } from '../hotels_list/hotels_list';

@Component({
  selector: 'page-search_hotel',
  templateUrl: 'search_hotel.html',
  providers: [DatePickerDirective],
}) 
export class Search_hotelPage {
   abult: string = "2";
   children: string = "0";
   infrat: string = "0";
   rooms: string = "1";
   @ViewChild(DatePickerDirective) public datepicker: DatePickerDirective;
   public localDate: Date = new Date();
   public initDate: Date = new Date();
   public initDate2: Date = new Date(2015, 1, 1);
   public minDate: Date = new Date(2018, 2, 31);
   public maxDate: Date = new Date(2018, 11, 10);
   public disabledDates: Date[] = [new Date(2017, 7, 14)];
   public localeString = {
    monday: true,
    weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  };
  public min: Date = new Date();
  constructor(public navCtrl: NavController) {
  }
   public ngOnInit() {

   }
     public Log(stuff): void {
    this.datepicker.open();
    this.datepicker.changed.subscribe(() => console.log('test'));
    console.log(stuff);
  }

  public event(data: Date): void {
    this.localDate = data;
  }
  setDate(date: Date) {
    console.log(date);
    this.initDate = date;
  }
    
 hotels_list(){
        this.navCtrl.push(Hotels_listPage)
  } 
 

}

