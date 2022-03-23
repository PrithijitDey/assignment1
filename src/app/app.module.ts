import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { LeftSideComponent } from './main-body/left-side/left-side.component';
import { CitiesComponent } from './main-body/left-side/cities/cities.component';
import { NewyorkComponent } from './main-body/left-side/cities/newyork/newyork.component';
import { LondonComponent } from './main-body/left-side/cities/london/london.component';
import { JapanComponent } from './main-body/left-side/cities/japan/japan.component';
import { RightSideComponent } from './main-body/right-side/right-side.component';
import { DemoPipe } from './file.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JapanWeeklyForecastComponent } from './main-body/left-side/cities/japan/japan-weekly-forecast/japan-weekly-forecast.component';
import { NewyorkWeeklyForecastComponent } from './main-body/left-side/cities/newyork/newyork-weekly-forecast/newyork-weekly-forecast.component';
import { LondonWeeklyForecastComponent } from './main-body/left-side/cities/london/london-weekly-forecast/london-weekly-forecast.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,
    LeftSideComponent,
    CitiesComponent,
    NewyorkComponent,
    LondonComponent,
    JapanComponent,
    RightSideComponent,
    DemoPipe,
    JapanWeeklyForecastComponent,
    NewyorkWeeklyForecastComponent,
    LondonWeeklyForecastComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
