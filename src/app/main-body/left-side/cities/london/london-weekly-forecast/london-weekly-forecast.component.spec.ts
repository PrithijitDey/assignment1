import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonWeeklyForecastComponent } from './london-weekly-forecast.component';

describe('LondonWeeklyForecastComponent', () => {
  let component: LondonWeeklyForecastComponent;
  let fixture: ComponentFixture<LondonWeeklyForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LondonWeeklyForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LondonWeeklyForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
