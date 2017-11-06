import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpocDashComponent } from './spoc-dash.component';

describe('SpocDashComponent', () => {
  let component: SpocDashComponent;
  let fixture: ComponentFixture<SpocDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpocDashComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpocDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
