import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdStatusComponent } from './bd-status.component';

describe('BdStatusComponent', () => {
  let component: BdStatusComponent;
  let fixture: ComponentFixture<BdStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
