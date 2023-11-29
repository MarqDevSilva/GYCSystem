import { TestBed } from '@angular/core/testing';

import { PalestrantesService } from './palestrantes.service';

describe('PalestrantesService', () => {
  let service: PalestrantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalestrantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
