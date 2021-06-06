import { TestBed } from '@angular/core/testing';

import { RbfaApiService } from './rbfa-api.service';

describe('RbfaApiService', () => {
  let service: RbfaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RbfaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
