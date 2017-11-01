import { TestBed, async, inject } from '@angular/core/testing';

import { BdGuardGuard } from './bd-guard.guard';

describe('BdGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BdGuardGuard]
    });
  });

  it('should ...', inject([BdGuardGuard], (guard: BdGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
