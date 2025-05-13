import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatorRoleComponent } from './educator-role.component';

describe('EducatorRoleComponent', () => {
  let component: EducatorRoleComponent;
  let fixture: ComponentFixture<EducatorRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducatorRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducatorRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
