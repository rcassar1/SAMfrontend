import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceTComponent } from './attendance-t.component';

describe('AttendanceTComponent', () => {
  let component: AttendanceTComponent;
  let fixture: ComponentFixture<AttendanceTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
