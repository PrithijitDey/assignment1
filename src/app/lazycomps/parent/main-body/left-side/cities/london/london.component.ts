import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonServices } from 'src/app/common.services';

@Component({
  selector: 'app-london',
  templateUrl: './london.component.html',
  styleUrls: ['./london.component.scss']
})

export class LondonComponent implements OnInit {
  date = new Date();
  forecastdata: any;
  respo: any;
  @Input() data = [];
  constructor(private service: CommonServices, private spinner: NgxSpinnerService) {
    this.service = service
  }
  ngOnInit(): void {
    this.spinner.show();
    this.service.getAllCityWeatherData().subscribe(
      (response: any) => {
        this.spinner.hide();
        this.service = response;
        this.forecastdata = response;
      },
    )
  }
}








