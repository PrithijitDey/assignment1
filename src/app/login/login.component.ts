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

  doLogin(loginFormData: any) {                                                             //authenticating the login credentials
    this.spinner.show();
    this.commonService.getCredentials().subscribe((response: any) => {                      // fetching the credentials from the database to check
      this.spinner.hide();
      if (loginFormData.userName == response.adminuser && loginFormData.password == response.password) {              //checks if the entered credentials match
          this.authService.setIsLoggedIn(true);
          this.router.navigate(['parent/city-Newyork']);                                     // if credentials match then user is lead to this component
      } else {                                                                             // if credentials do not match then is lead back -
        console.log('wrong credentials');                                                   // - to login page with the statement printed in the console
      }
    })
  }

}
