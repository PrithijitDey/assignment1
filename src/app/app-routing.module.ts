import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JapanComponent } from './parent/main-body/left-side/cities/japan/japan.component';
import { LondonComponent } from './parent/main-body/left-side/cities/london/london.component';
import { NewyorkComponent } from './parent/main-body/left-side/cities/newyork/newyork.component';
import { JapanWeeklyForecastComponent } from './parent/main-body/left-side/cities/japan/japan-weekly-forecast/japan-weekly-forecast.component';
import { LondonWeeklyForecastComponent } from './parent/main-body/left-side/cities/london/london-weekly-forecast/london-weekly-forecast.component';
import { NewyorkWeeklyForecastComponent } from './parent/main-body/left-side/cities/newyork/newyork-weekly-forecast/newyork-weekly-forecast.component';
import { ParentComponent } from './parent/parent.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:  'Parent', component:ParentComponent,
  children:[
  { path: 'City-Newyork', component: NewyorkComponent  },
  { path: 'City-London', component: LondonComponent },
  { path: 'City-Japan', component: JapanComponent },
  { path: 'Weekly-Newyork', component: NewyorkWeeklyForecastComponent },
  { path: 'Weekly-London', component: LondonWeeklyForecastComponent },
  { path: 'Weekly-Japan', component: JapanWeeklyForecastComponent },
  ]},
  {path:'Login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
