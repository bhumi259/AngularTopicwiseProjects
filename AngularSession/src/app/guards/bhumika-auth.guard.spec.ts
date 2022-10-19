import { TestBed } from '@angular/core/testing';

import { BhumikaAuthGuard } from './bhumika-auth.guard';

describe('BhumikaAuthGuard', () => {
  let guard: BhumikaAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BhumikaAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
