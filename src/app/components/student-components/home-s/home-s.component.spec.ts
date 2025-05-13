import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSComponent } from './home-s.component';

describe('HomeSComponent', () => {
  let component: HomeSComponent;
  let fixture: ComponentFixture<HomeSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
