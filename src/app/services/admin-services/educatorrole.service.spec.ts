import { TestBed } from '@angular/core/testing';

import { EducatorroleService } from './educatorrole.service';

describe('EducatorroleService', () => {
  let service: EducatorroleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducatorroleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
