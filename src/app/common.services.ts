
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface ICommonServices {
  adminuser: string;
  password: number;
  id: string;
  condition: string;
  temperature: any;
  day: number;
  night: number;
  wind: { speed: number, direction: string };
  speed: number;
  direction: string;
}

@Injectable
  ({
    providedIn: 'root'
  })

export class CommonServices {
  baseUrl = 'http://localhost:3000/';
  weatherforecastUrl = 'weatherforecast';
  credentialsUrl = 'logincredentials';
  citiesList = 'cities';

  constructor(private http: HttpClient) { }

  getCredentials(): Observable<any> {
    return this.http.get<CommonServices[]>(this.baseUrl + this.credentialsUrl)
  }


  getAllCityWeatherData(): Observable<any> {
    return this.http.get<CommonServices[]>(this.baseUrl + this.weatherforecastUrl)

  }

  getCityList(): Observable<any> {
    return this.http.get<any>(this.baseUrl + this.citiesList)
  }

}

