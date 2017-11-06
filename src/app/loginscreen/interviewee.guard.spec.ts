import { TestBed, async, inject } from '@angular/core/testing';

import { IntervieweeGuard } from './interviewee.guard';

describe('IntervieweeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntervieweeGuard]
    });
  });

  it('should ...', inject([IntervieweeGuard], (guard: IntervieweeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
