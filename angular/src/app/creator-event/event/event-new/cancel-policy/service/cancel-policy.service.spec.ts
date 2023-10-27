import { TestBed } from '@angular/core/testing';

import { CancelPolicyService } from './cancel-policy.service';

describe('CancelPolicyService', () => {
  let service: CancelPolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancelPolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
