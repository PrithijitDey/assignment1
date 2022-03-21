import { Component, OnInit } from '@angular/core';
import { WeatherInfoService } from 'src/app/cityInfoService';
import { DemoPipe } from '../../../../file.pipe';
@Component({
  selector: 'app-newyork',
  templateUrl: './newyork.component.html',
  styleUrls: ['./newyork.component.scss']
})
export class NewyorkComponent implements OnInit {
  date = new Date();
  forecastdata:any;
  constructor(private service: WeatherInfoService) {
    this.service = service;

   }


  

  ngOnInit(): void {
    this.forecastdata = this.service.getNewyorkWeather();
  }

}
