import { TestBed } from '@angular/core/testing';

import { CapaService } from './capa.service';

describe('CapaService', () => {
  let service: CapaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
