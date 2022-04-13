import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
  constructor(private router:Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit(): void {
    this.forecastdata = history.state;
      console.log(this.forecastdata );
  }
}









