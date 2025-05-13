import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSComponent } from './calendar-s.component';

describe('CalendarSComponent', () => {
  let component: CalendarSComponent;
  let fixture: ComponentFixture<CalendarSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
