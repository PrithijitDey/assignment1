import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-london',
  templateUrl: './london.component.html',
  styleUrls: ['./london.component.scss']
})
export class LondonComponent implements OnInit {

  londonforecast = {
    condition : "SUNNY",
	temperature : {
		day : 26,
		night : 15
	},
	wind : {
		speed : 1,
		direction : "SOUTH"
    }
  };
  

  constructor() { }

  ngOnInit(): void {
    (this.londonforecast);
  }

}
