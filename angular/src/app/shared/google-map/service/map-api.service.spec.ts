import { TestBed } from '@angular/core/testing';

import { MapAPIService } from './map-api.service';

describe('MapAPIService', () => {
  let service: MapAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
