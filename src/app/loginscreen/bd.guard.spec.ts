import { TestBed, async, inject } from '@angular/core/testing';

import { BdGuard } from './bd.guard';

describe('BdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BdGuard]
    });
  });

  it('should ...', inject([BdGuard], (guard: BdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
