import { TestBed, async, inject } from '@angular/core/testing';

import { IntervieweeGuardGuard } from './interviewee-guard.guard';

describe('IntervieweeGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntervieweeGuardGuard]
    });
  });

  it('should ...', inject([IntervieweeGuardGuard], (guard: IntervieweeGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
