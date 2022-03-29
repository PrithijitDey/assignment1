import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-london-weekly-forecast',
  templateUrl: './london-weekly-forecast.component.html',
  styleUrls: ['./london-weekly-forecast.component.scss']
})
export class LondonWeeklyForecastComponent implements OnInit {

  dailyTable = [

    { day: 'MON', morning: 2, night: 12, },
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
