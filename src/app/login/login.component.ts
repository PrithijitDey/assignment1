import { Component, OnInit } from '@angular/core';
import { WeatherInfoService } from 'src/app/cityInfoService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  check = false;
  username: any;
  password: any;
  credentials:any;
  constructor(private service: WeatherInfoService ) {
    this.service = service}

  ngOnInit(): void {
    this.service.getCredentials().subscribe(
      (response:any) => {
        console.log('credentials received')
       this.service = response;
       this.credentials = response;})


  }

  getCred(user: string, pass: any) {
    console.log ("admin username :: " + this.credentials[0].adminuser);
    console.log ("admin password :: " + this.credentials[0].password);
    if (user == this.credentials[0].adminuser && pass == this.credentials[0].password) {
      this.check = true;
      return this.check;
    } else {
      console.log('wrong credentials');
      return this.check;
    }
  }

}
