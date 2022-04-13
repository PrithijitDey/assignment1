import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newyork',
  templateUrl: './newyork.component.html',
  styleUrls: ['./newyork.component.scss']
})
export class NewyorkComponent implements OnInit {
  date = new Date();
  forecastdata:any;
  respo:any;
  constructor(private router:Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);

  }

  ngOnInit(): void {
    this.forecastdata = history.state;
      console.log(this.forecastdata );
  }
}
