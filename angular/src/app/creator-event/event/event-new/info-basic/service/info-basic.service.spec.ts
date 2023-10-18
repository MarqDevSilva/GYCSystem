import { TestBed } from '@angular/core/testing';

import { InfoBasicService } from './info-basic.service';

describe('InfoBasicService', () => {
  let service: InfoBasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoBasicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
