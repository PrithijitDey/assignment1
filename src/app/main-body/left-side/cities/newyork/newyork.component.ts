import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newyork',
  templateUrl: './newyork.component.html',
  styleUrls: ['./newyork.component.scss']
})
export class NewyorkComponent implements OnInit {

  newyorkforecast = {
    condition : "SUNNY",
	temperature : {
		day : 32,
		night : 10
	},
	wind : {
		speed : 3,
		direction : "NORTH"
    }
  };


  constructor() { }

  ngOnInit(): void {
  }

}
