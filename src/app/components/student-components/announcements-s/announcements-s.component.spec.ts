import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsSComponent } from './announcements-s.component';

describe('AnnouncementsSComponent', () => {
  let component: AnnouncementsSComponent;
  let fixture: ComponentFixture<AnnouncementsSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncementsSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
