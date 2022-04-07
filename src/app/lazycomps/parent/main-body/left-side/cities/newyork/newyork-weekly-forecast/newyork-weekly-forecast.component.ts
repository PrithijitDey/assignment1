import { Component, OnInit } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-newyork-weekly-forecast',
  templateUrl: './newyork-weekly-forecast.component.html',
  styleUrls: ['./newyork-weekly-forecast.component.scss']
})
export class NewyorkWeeklyForecastComponent implements OnInit {


  dailyTable = [

    { day: 'MON', morning: 3, night: 13, },
    { day: 'TUE', morning: 2, night: 12, },
    { day: 'WED', morning: 3, night: 13, },
    { day: 'THU', morning: 4, night: 14, },
    { day: 'FRI', morning: 5, night: 15, },
    { day: 'SAT', morning: 6, night: 16, },
    { day: 'SUN', morning: 7, night: 17, }

  ];
  columnsToDisplay=['day','morning', 'night'];
  constructor() { }

  ngOnInit(): void {
  }

}
