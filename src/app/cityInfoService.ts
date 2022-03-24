
 import { Injectable } from '@angular/core';
 

 import { HttpClient, HttpHeaders } from '@angular/common/http';
  
 export interface WeatherForecastInterface
 {
   id:string;
   condition : string; 
   temperature : any;
   day : number;
   night : number;
   wind : any;
   speed : number;
   direction : string;
                             }
 

 @Injectable
 ({
          providedIn: 'root'
  })
  
 
  
export class  WeatherInfoService {
   
   private weatherforecastUrl = 'http://localhost:3000/weatherforecast'; 
    constructor(private http:HttpClient) { }
        
  
    

     getAllCityWeatherData() {
       
         return this.http.get<WeatherForecastInterface[]>(this.weatherforecastUrl)
       
      }//TODO get the data
     
   }
