import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePickerDirective } from 'ion-datepicker';
import { Cab_listPage } from '../cab_list/cab_list';

@Component({
  selector: 'page-search_cab',
  templateUrl: 'search_cab.html',
  providers: [DatePickerDirective],
})
export class Search_cabPage {
  train: string = "one_way";
  abult: string = "1";
  children: string = "0";
  infrat: string = "0";
  class: string = "1";
  public event = { timeStarts: '11:30' };
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

  setDate(date: Date) {
    console.log(date);
    this.initDate = date;
  }

  cab_list() {
    this.navCtrl.push(Cab_listPage)
  }


}
