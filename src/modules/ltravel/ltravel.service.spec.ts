import { TestBed } from '@angular/core/testing';

import { LtravelService } from './ltravel.service';

describe('LtravelService', () => {
  let service: LtravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LtravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
