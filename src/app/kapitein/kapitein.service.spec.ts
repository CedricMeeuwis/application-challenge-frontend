import { TestBed } from '@angular/core/testing';

import { KapiteinService } from './kapitein.service';

describe('KapiteinService', () => {
  let service: KapiteinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KapiteinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
