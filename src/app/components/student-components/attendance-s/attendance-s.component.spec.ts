import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceSComponent } from './attendance-s.component';

describe('AttendanceSComponent', () => {
  let component: AttendanceSComponent;
  let fixture: ComponentFixture<AttendanceSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
