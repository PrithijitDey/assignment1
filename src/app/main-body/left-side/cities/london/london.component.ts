import { Component, OnInit } from '@angular/core';
import { WeatherInfoService } from 'src/app/cityInfoService';
import { DemoPipe } from '../../../../file.pipe';
@Component({
  selector: 'app-london',
  templateUrl: './london.component.html',
  styleUrls: ['./london.component.scss']
})
export class LondonComponent implements OnInit {
  date = new Date();
  forecastdata:any;
  constructor(private service: WeatherInfoService) {
    this.service = service;

   }
  ngOnInit(): void {
    this.forecastdata = this.service.GetLondonWeather();

  }

}
