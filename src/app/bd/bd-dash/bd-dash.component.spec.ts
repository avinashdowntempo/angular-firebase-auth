import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdDashComponent } from './bd-dash.component';

describe('BdDashComponent', () => {
  let component: BdDashComponent;
  let fixture: ComponentFixture<BdDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BdDashComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
