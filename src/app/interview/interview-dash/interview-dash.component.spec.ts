import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewDashComponent } from './interview-dash.component';

describe('InterviewDashComponent', () => {
  let component: InterviewDashComponent;
  let fixture: ComponentFixture<InterviewDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewDashComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
