import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './parent/main-body/main-body.component';
import { LeftSideComponent } from './parent/main-body/left-side/left-side.component';
import { CitiesComponent } from './parent/main-body/left-side/cities/cities.component';
import { NewyorkComponent } from './parent/main-body/left-side/cities/newyork/newyork.component';
import { LondonComponent } from './parent/main-body/left-side/cities/london/london.component';
import { JapanComponent } from './parent/main-body/left-side/cities/japan/japan.component';
import { RightSideComponent } from './parent/main-body/right-side/right-side.component';
import { JapanWeeklyForecastComponent } from './parent/main-body/left-side/cities/japan/japan-weekly-forecast/japan-weekly-forecast.component';
import { NewyorkWeeklyForecastComponent } from './parent/main-body/left-side/cities/newyork/newyork-weekly-forecast/newyork-weekly-forecast.component';
import { LondonWeeklyForecastComponent } from './parent/main-body/left-side/cities/london/london-weekly-forecast/london-weekly-forecast.component';
import { ParentComponent } from './parent/parent.component';
import { LazycompsRoutingModule } from './lazycomps-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DemoPipe } from 'src/app/file.pipe';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    MainBodyComponent,
    LeftSideComponent,
    CitiesComponent,
    NewyorkComponent,
    LondonComponent,
    JapanComponent,
    RightSideComponent,
    JapanWeeklyForecastComponent,
    NewyorkWeeklyForecastComponent,
    LondonWeeklyForecastComponent,
    ParentComponent,
    DemoPipe,

  ],
  imports: [
    NgxSpinnerModule,
    CommonModule,
    LazycompsRoutingModule,
    MatTableModule,
    MatSortModule,
    MatTableModule,
    AgGridModule.withComponents(null),
  ],
  providers: [NgxSpinnerService]
})
export class LazycompsModule { }
