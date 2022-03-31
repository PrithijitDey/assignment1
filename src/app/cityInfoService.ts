
 import { Injectable } from '@angular/core';


 import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

 export interface WeatherForecastInterface
 {
   adminuser:string;
   password:number;
   id:string;
   condition : string;
   temperature : any;
   day : number;
   night : number;
   wind : {speed:number,direction:string};
   speed : number;
   direction : string;
                             }


 @Injectable
 ({
          providedIn: 'root'
  })



export class  WeatherInfoService {

    weatherforecastUrl = 'http://localhost:3000/weatherforecast';
    credentialsUrl = 'http://localhost:3000/logincredentials';
   subscribe: any;
    constructor(private http:HttpClient) { }

    getCredentials():Observable<any>{
      return this.http.get<WeatherForecastInterface[]>(this.credentialsUrl)
    }


     getAllCityWeatherData(): Observable<any>  {
         return this.http.get<WeatherForecastInterface[]>(this.weatherforecastUrl)

      }

   }

