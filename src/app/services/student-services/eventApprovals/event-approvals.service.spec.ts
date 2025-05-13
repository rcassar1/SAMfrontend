import { TestBed } from '@angular/core/testing';

import { EventApprovalsService } from './event-approvals.service';

describe('EventApprovalsService', () => {
  let service: EventApprovalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventApprovalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
