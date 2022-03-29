import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapanWeeklyForecastComponent } from './japan-weekly-forecast.component';

describe('JapanWeeklyForecastComponent', () => {
  let component: JapanWeeklyForecastComponent;
  let fixture: ComponentFixture<JapanWeeklyForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JapanWeeklyForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JapanWeeklyForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
