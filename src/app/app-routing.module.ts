import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JapanComponent } from './main-body/left-side/cities/japan/japan.component';
import { LondonComponent } from './main-body/left-side/cities/london/london.component';
import { NewyorkComponent } from './main-body/left-side/cities/newyork/newyork.component';

const routes: Routes = [
  { path: 'City-Newyork', component: NewyorkComponent  },
  { path: 'City-London', component: LondonComponent },
  { path: 'City-Japan', component: JapanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
