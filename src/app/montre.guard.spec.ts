import { TestBed } from '@angular/core/testing';

import { MontreGuard } from './montre.guard';

describe('MontreGuard', () => {
  let guard: MontreGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MontreGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
