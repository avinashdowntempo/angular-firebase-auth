import { TestBed, async, inject } from '@angular/core/testing';

import { SpocGuard } from './spoc.guard';

describe('SpocGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpocGuard]
    });
  });

  it('should ...', inject([SpocGuard], (guard: SpocGuard) => {
    expect(guard).toBeTruthy();
  }));
});
