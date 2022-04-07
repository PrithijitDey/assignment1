import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JapanComponent } from './lazycomps/parent/main-body/left-side/cities/japan/japan.component';
import { LondonComponent } from './lazycomps/parent/main-body/left-side/cities/london/london.component';
import { NewyorkComponent } from './lazycomps/parent/main-body/left-side/cities/newyork/newyork.component';
import { JapanWeeklyForecastComponent } from './lazycomps/parent/main-body/left-side/cities/japan/japan-weekly-forecast/japan-weekly-forecast.component';
import { LondonWeeklyForecastComponent } from './lazycomps/parent/main-body/left-side/cities/london/london-weekly-forecast/london-weekly-forecast.component';
import { NewyorkWeeklyForecastComponent } from './lazycomps/parent/main-body/left-side/cities/newyork/newyork-weekly-forecast/newyork-weekly-forecast.component';
import { ParentComponent } from './lazycomps/parent/parent.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: "admin",loadChildren:()=> import('./lazycomps/lazycomps.module')
  .then(mod=>mod.LazycompsModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
