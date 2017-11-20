import { TestBed, inject } from '@angular/core/testing';

import { JobFormService } from './job-form.service';

describe('JobFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobFormService]
    });
  });

  it('should be created', inject([JobFormService], (service: JobFormService) => {
    expect(service).toBeTruthy();
  }));
});
