
 import { Injectable } from '@angular/core';
 import {MatTableModule} from '@angular/material/table';

    
  

 @Injectable
 ({
          providedIn: 'root'
  })
  
 
  
export class  WeatherInfoService {
   
        
    constructor() { }
        
    getLondonWeather()
    {
         return  { condition : "SUNNY", 
             temperature : {
                day : 26,
                
                night : 15
             },
             wind : {
                speed : 0,
                 direction : "SOUTH"
        
            },
             
            
         };
         
    }
    getNewyorkWeather()
    {
      return {  condition : "SUNNY",
	            temperature : {
		             day : 32,
		            night : 10
	                 },
	            wind : {
		            speed : 0,
		            direction : "NORTH"
                    },
                     DailyTable:[
                        {day: 'MON', morning: 8, night: 18},
                        {day: 'TUE', morning: 9, night: 19},
                        {day: 'WED', morning: 10, night: 20},
                        {day: 'THU', morning: 11, night: 21},
                        {day: 'FRI', morning: 12, night: 22},
                        {day: 'SAT', morning: 13, night: 23},
                        {day: 'SUN', morning: 14, night: 24},
                        
                      ]

        };

    }

    getJapanWeather(){

       return{ condition : "CLOUDY",
                temperature : {
                     day : 22,
                     night : 18
                     },
                    
                     wind : {
                        speed : 0,
                        direction : "SOUTH"
                     },
                     DailyTable: [
                        {day: 'MON', morning: 15, night: 25},
                        {day: 'TUE', morning: 16, night: 26},
                        {day: 'WED', morning: 17, night: 27},
                        {day: 'THU', morning: 18, night: 28},
                        {day: 'FRI', morning: 19, night: 29},
                        {day: 'SAT', morning: 20, night: 30},
                        {day: 'SUN', morning: 21, night: 31},
                        
                      ]
                };
               
     }
     displayedColumns!: ['day', 'morning', 'night'];

}