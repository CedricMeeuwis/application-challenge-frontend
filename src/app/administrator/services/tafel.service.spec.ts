import { TestBed } from '@angular/core/testing';

import { TafelService } from './tafel.service';

describe('TafelService', () => {
  let service: TafelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TafelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
