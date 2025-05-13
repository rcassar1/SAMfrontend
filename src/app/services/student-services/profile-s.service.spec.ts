import { TestBed } from '@angular/core/testing';

import { ProfileSService } from './profile-s.service';

describe('ProfileSService', () => {
  let service: ProfileSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
