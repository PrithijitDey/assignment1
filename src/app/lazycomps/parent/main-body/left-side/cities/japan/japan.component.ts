import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonServices } from 'src/app/common.services';
import { DemoPipe } from 'src/app/file.pipe';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-japan',
  templateUrl: './japan.component.html',
  styleUrls: ['./japan.component.scss'],

})
export class JapanComponent implements OnInit {
  date = new Date();
  forecastdata: any;
  respo: any;

  route: any;
  sub: any;

  constructor() {

  }

  ngOnInit(): void {
    this.sub = this.route.response.subscribe((response: any) => {
      this.forecastdata = response[this.forecastdata];
      }
      );
      console.log("forecastdata recieved");


  }
}
