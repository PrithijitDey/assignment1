import { Component, OnInit } from '@angular/core';
import { weatherinfoservice } from 'src/app/cityInfoService';
import { DemoPipe } from '../../../../file.pipe';
@Component({
  selector: 'app-japan',
  templateUrl: './japan.component.html',
  styleUrls: ['./japan.component.scss']
})
export class JapanComponent implements OnInit {
  date = new Date(2022, 2, 17);
  forecastdata:any;
  constructor(private service: weatherinfoservice) {
    this.service = service;

   }
    
   

  

  ngOnInit(): void {
    this.forecastdata = this.service.getjapanweather();
  }

}
