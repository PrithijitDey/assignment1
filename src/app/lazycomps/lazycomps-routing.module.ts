import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth-guard/auth.guard';
import { JapanWeeklyForecastComponent } from './parent/main-body/left-side/cities/japan/japan-weekly-forecast/japan-weekly-forecast.component';
import { JapanComponent } from './parent/main-body/left-side/cities/japan/japan.component';
import { LondonWeeklyForecastComponent } from './parent/main-body/left-side/cities/london/london-weekly-forecast/london-weekly-forecast.component';
import { LondonComponent } from './parent/main-body/left-side/cities/london/london.component';
import { NewyorkWeeklyForecastComponent } from './parent/main-body/left-side/cities/newyork/newyork-weekly-forecast/newyork-weekly-forecast.component';
import { NewyorkComponent } from './parent/main-body/left-side/cities/newyork/newyork.component';
import { ParentComponent } from './parent/parent.component';
const routes: Routes = [                                                                            //routes to components that are to be lazy loaded

  {
    path: 'parent', component: ParentComponent,canActivate:[AuthGuard],
    children: [
      { path: 'city-Newyork', component: NewyorkComponent },
      { path: 'city-London', component: LondonComponent },
      { path: 'city-Japan', component: JapanComponent },
      { path: 'weekly-Newyork', component: NewyorkWeeklyForecastComponent },
      { path: 'weekly-London', component: LondonWeeklyForecastComponent },
      { path: 'weekly-Japan', component: JapanWeeklyForecastComponent },
      { path: '', redirectTo: 'city-Newyork', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazycompsRoutingModule { }
