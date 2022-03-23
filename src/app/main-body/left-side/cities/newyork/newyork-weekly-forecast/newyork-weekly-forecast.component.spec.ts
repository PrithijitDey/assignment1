import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewyorkWeeklyForecastComponent } from './newyork-weekly-forecast.component';

describe('NewyorkWeeklyForecastComponent', () => {
  let component: NewyorkWeeklyForecastComponent;
  let fixture: ComponentFixture<NewyorkWeeklyForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewyorkWeeklyForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewyorkWeeklyForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
