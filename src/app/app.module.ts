import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainBodyComponent } from './parent/main-body/main-body.component';
import { LeftSideComponent } from './parent/main-body/left-side/left-side.component';
import { CitiesComponent } from './parent/main-body/left-side/cities/cities.component';
import { NewyorkComponent } from './parent/main-body/left-side/cities/newyork/newyork.component';
import { LondonComponent } from './parent/main-body/left-side/cities/london/london.component';
import { JapanComponent } from './parent/main-body/left-side/cities/japan/japan.component';
import { RightSideComponent } from './parent/main-body/right-side/right-side.component';
import { DemoPipe } from './file.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JapanWeeklyForecastComponent } from './parent/main-body/left-side/cities/japan/japan-weekly-forecast/japan-weekly-forecast.component';
import { NewyorkWeeklyForecastComponent } from './parent/main-body/left-side/cities/newyork/newyork-weekly-forecast/newyork-weekly-forecast.component';
import { LondonWeeklyForecastComponent } from './parent/main-body/left-side/cities/london/london-weekly-forecast/london-weekly-forecast.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    LoginComponent,
    ParentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
