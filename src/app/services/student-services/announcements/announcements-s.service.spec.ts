import { TestBed } from '@angular/core/testing';

import { AnnouncementsSService } from './announcements-s.service';

describe('AnnouncementsSService', () => {
  let service: AnnouncementsSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnouncementsSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
