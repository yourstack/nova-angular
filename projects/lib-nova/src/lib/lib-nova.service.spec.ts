import { TestBed } from '@angular/core/testing';

import { LibNovaService } from './lib-nova.service';

describe('LibNovaService', () => {
  let service: LibNovaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibNovaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
