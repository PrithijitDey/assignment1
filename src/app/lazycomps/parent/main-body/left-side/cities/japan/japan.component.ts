import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonServices } from 'src/app/common.services';
import { DemoPipe } from 'src/app/file.pipe';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import {  Observable} from 'rxjs';
import { map, filter} from 'rxjs/operators';
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

  constructor(private router:Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);

  }

  ngOnInit(): void {
    this.forecastdata = history.state;
      console.log(this.forecastdata );
  }
}
