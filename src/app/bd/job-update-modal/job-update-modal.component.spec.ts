import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobUpdateModalComponent } from './job-update-modal.component';

describe('JobUpdateModalComponent', () => {
  let component: JobUpdateModalComponent;
  let fixture: ComponentFixture<JobUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
