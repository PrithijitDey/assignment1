import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JapanComponent } from './main-body/left-side/cities/japan/japan.component';
import { LondonComponent } from './main-body/left-side/cities/london/london.component';
import { NewyorkComponent } from './main-body/left-side/cities/newyork/newyork.component';
import { JapanWeeklyForecastComponent } from './main-body/left-side/cities/japan/japan-weekly-forecast/japan-weekly-forecast.component';
import { LondonWeeklyForecastComponent } from './main-body/left-side/cities/london/london-weekly-forecast/london-weekly-forecast.component';
import { NewyorkWeeklyForecastComponent } from './main-body/left-side/cities/newyork/newyork-weekly-forecast/newyork-weekly-forecast.component';


const routes: Routes = [

  { path: 'City-Newyork', component: NewyorkComponent  },
  { path: 'City-London', component: LondonComponent },
  { path: 'City-Japan', component: JapanComponent },
  { path: 'Weekly-Newyork', component: NewyorkWeeklyForecastComponent },
  { path: 'Weekly-London', component: LondonWeeklyForecastComponent },
  { path: 'Weekly-Japan', component: JapanWeeklyForecastComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
