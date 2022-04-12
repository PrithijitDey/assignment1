import { Component, OnInit } from '@angular/core';
import { CommonServices } from 'src/app/common.services';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {
  cities: any[] = [];
  forecastdata: any;
  respo: any;

  constructor(private service : CommonServices, private spinner: NgxSpinnerService) {
    this.service = service;
   }

  ngOnInit(): void {
    this.service.getCityList().subscribe((response: any) => {                             //fetching the list of city from the database
      this.cities = response;
    });
    this.spinner.show();                                                                  // loading spinner
    this.service.getAllCityWeatherData().subscribe(                                      // fetching the weather reports from the database
      (response: any) => {
        this.spinner.hide();
        console.log('response received')                                                 // displays in console when the data is recieved
        this.service = response;
        this.forecastdata = response;
      },
    )
  }

}
