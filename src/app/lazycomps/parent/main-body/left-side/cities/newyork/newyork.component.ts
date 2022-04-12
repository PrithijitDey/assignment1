import { Component, Input, OnInit } from '@angular/core';
import { CommonServices } from 'src/app/common.services';
import { DemoPipe } from 'src/app/file.pipe';

@Component({
  selector: 'app-newyork',
  templateUrl: './newyork.component.html',
  styleUrls: ['./newyork.component.scss']
})
export class NewyorkComponent implements OnInit {
  date = new Date();
  forecastdata:any;
  respo:any;
  @Input() data = [];
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
