import { Injectable } from '@angular/core';
import {  CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthGuardService) {

  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isLoggedIn){
        console.log("authgaurd allowed");
    return true;

      }
      else{
        console.log("authgaurd did not allowed");
        return false
      }

  }

}
