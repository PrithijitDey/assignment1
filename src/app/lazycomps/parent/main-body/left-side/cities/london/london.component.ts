import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { CommonServices } from 'src/app/common.services';
import { DemoPipe } from 'src/app/file.pipe';
@Component({
  selector: 'app-london',
  templateUrl: './london.component.html',
  styleUrls: ['./london.component.scss']
})
export class LondonComponent implements OnInit {
  date = new Date();
  forecastdata:any;
  respo:any;
  constructor(private service: CommonServices ) {
    this.service = service



   }
  ngOnInit(): void {
    this.service.getAllCityWeatherData().subscribe(
      (response:any) => {
        console.log('response received')
       this.service = response;
       this.forecastdata = response;
      },
    )



  }

}








