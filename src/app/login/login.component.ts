import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServices } from 'src/app/common.services';

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
  static checks: any;

  constructor(private service: CommonServices, private router: Router) {
    this.service = service}

  ngOnInit(): void {
    this.service.getCredentials().subscribe(
      (response:any) => {
        console.log('credentials received')
       this.service = response;
       this.credentials = response;})


  }

  doLogin(user: string, pass: any) {
    console.log ("admin username :: " + this.credentials.adminuser);
    console.log ("admin password :: " + this.credentials.password);
    if (user == this.credentials.adminuser && pass == this.credentials.password) {
      this.router.navigate(['parent/city-Newyork']);
      LoginComponent.checks = true;
    } else {
      console.log('wrong credentials');
    }
  }

}
