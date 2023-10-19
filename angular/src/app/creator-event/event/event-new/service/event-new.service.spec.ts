import { TestBed } from '@angular/core/testing';

import { EventNewService } from './event-new.service';

describe('EventNewService', () => {
  let service: EventNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
