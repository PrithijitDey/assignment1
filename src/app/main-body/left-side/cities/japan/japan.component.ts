import { Component, OnInit } from '@angular/core';
import { WeatherInfoService } from 'src/app/cityInfoService';
import { DemoPipe } from '../../../../file.pipe';
@Component({
  selector: 'app-japan',
  templateUrl: './japan.component.html',
  styleUrls: ['./japan.component.scss']
})
export class JapanComponent implements OnInit {
  date = new Date();
  forecastdata:any;
  constructor(private service: WeatherInfoService) {
    this.service = service;

   }
    
   

  

  ngOnInit(): void {
    this.forecastdata = this.service.getJapanWeather();
  }

}
