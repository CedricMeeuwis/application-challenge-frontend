import { TestBed } from '@angular/core/testing';

import { KapiteinGuard } from './kapitein.guard';

describe('KapiteinGuard', () => {
  let guard: KapiteinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(KapiteinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
