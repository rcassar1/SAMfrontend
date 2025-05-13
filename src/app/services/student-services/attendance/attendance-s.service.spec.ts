import { TestBed } from '@angular/core/testing';

import { AttendanceSService } from './attendance-s.service';

describe('AttendanceSService', () => {
  let service: AttendanceSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendanceSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
