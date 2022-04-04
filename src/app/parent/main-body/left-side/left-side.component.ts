import { Component, OnInit } from '@angular/core';
import { CommonServices } from 'src/app/common.services';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {
  cities: any[] = [];

  constructor(private service : CommonServices) { }

  ngOnInit(): void {
    this.service.getCityList().subscribe((response: any) => {
      this.cities = response;
    })
  }

}
