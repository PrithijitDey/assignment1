import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonServices } from 'src/app/common.services';
import { DemoPipe } from 'src/app/file.pipe';
@Component({
  selector: 'app-japan',
  templateUrl: './japan.component.html',
  styleUrls: ['./japan.component.scss']
})
export class JapanComponent implements OnInit {
  date = new Date();
  forecastdata: any;
  respo: any;

  constructor(private service: CommonServices, private spinner: NgxSpinnerService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.spinner.show();
    this.service.getAllCityWeatherData().subscribe(
      (response: any) => {
        this.spinner.hide();
        console.log('response received')
        this.service = response;
        this.forecastdata = response;
      },
    )
  }
}
