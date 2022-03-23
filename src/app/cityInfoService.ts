
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
                    
                };
               
     }
     displayedColumns!: ['day', 'morning', 'night'];

}