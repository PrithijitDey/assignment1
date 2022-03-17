import { Component, OnInit } from '@angular/core';
import { weatherinfoservice } from 'src/app/cityInfoService';
import { DemoPipe } from '../../../../file.pipe';
@Component({
  selector: 'app-newyork',
  templateUrl: './newyork.component.html',
  styleUrls: ['./newyork.component.scss']
})
export class NewyorkComponent implements OnInit {
  date = new Date(2022, 2, 17);
  forecastdata:any;
  constructor(private service: weatherinfoservice) {
    this.service = service;

   }


  

  ngOnInit(): void {
    this.forecastdata = this.service.getnewyorkweather();
  }

}
