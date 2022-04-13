import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-japan',
  templateUrl: './japan.component.html',
  styleUrls: ['./japan.component.scss'],

})

export class JapanComponent implements OnInit {
  date = new Date();
  forecastdata: any;
  respo: any;
  sub: any;
 index=3;
  constructor(private router:Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);

  }

  ngOnInit(): void {
    this.forecastdata = history.state;
      console.log(this.forecastdata );
  }
}
