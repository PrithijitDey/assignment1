import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-japan',
  templateUrl: './japan.component.html',
  styleUrls: ['./japan.component.scss']
})
export class JapanComponent implements OnInit {

   japanforecast = {
    condition : "CLOUDY",
    temperature : {
      day : 22,
      night : 18
    },
    wind : {
      speed : 1.5,
      direction : "SOUTH"
    }
  };


  constructor() {
    
   }

  

  ngOnInit(): void {
  }

}
