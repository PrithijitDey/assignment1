import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-japan-weekly-forecast',
  templateUrl: './japan-weekly-forecast.component.html',
  styleUrls: ['./japan-weekly-forecast.component.scss']
})
export class JapanWeeklyForecastComponent implements OnInit{

  dailyTable = [

    { day: 'MON', morning: 1, night: 11, },
    { day: 'TUE', morning: 2, night: 12, },
    { day: 'WED', morning: 3, night: 13, },
    { day: 'THU', morning: 4, night: 14, },
    { day: 'FRI', morning: 5, night: 15, },
    { day: 'SAT', morning: 6, night: 16, },
    { day: 'SUN', morning: 7, night: 17, }

  ];
  columnsToDisplay=['day','morning', 'night'];
  constructor() {


   }

  ngOnInit(): void {


  }



}
