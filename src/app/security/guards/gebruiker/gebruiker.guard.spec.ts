import { TestBed } from '@angular/core/testing';

import { GebruikerGuard } from './gebruiker.guard';

describe('GebruikerGuard', () => {
  let guard: GebruikerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GebruikerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
