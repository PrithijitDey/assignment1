
 import { Injectable } from '@angular/core';


 @Injectable
 ({
          providedIn: 'root'
  })
  
    
export class  weatherinfoservice {
   
        
    constructor() { }
        
    getlondonweather()
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
    getnewyorkweather()
    {
      return {  condition : "SUNNY",
	            temperature : {
		             day : 32,
		            night : 10
	                 },
	            wind : {
		            speed : 0,
		            direction : "NORTH"
                    }
        }

    }

    getjapanweather(){

       return{ condition : "CLOUDY",
                temperature : {
                     day : 22,
                     night : 18
                     },
                    
                     wind : {
                        speed : 0,
                        direction : "SOUTH"
                     }
                }
     }
}