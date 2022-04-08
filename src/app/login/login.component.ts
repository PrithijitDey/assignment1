import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServices } from 'src/app/common.services';
import { AuthGuardService } from '../auth-guard/auth-guard.service';
import { FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    userName: '',
    password: ''
  });

  constructor(private commonService: CommonServices,
    private router: Router,
    private authService: AuthGuardService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void { }

  doLogin(loginFormData: any) {
    this.spinner.show();
    this.commonService.getCredentials().subscribe((response: any) => {
      this.spinner.hide();
      if (loginFormData.userName == response.adminuser && loginFormData.password == response.password) {
        this.authService.setIsLoggedIn(true);
        this.router.navigate(['parent/city-Newyork']);
      } else {
        console.log('wrong credentials');
      }
    })
  }

}
