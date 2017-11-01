import { TestBed, async, inject } from '@angular/core/testing';

import { SpocGuardGuard } from './spoc-guard.guard';

describe('SpocGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpocGuardGuard]
    });
  });

  it('should ...', inject([SpocGuardGuard], (guard: SpocGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
