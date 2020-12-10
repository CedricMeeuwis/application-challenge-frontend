import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloegDetailsComponent } from './ploeg-details.component';

describe('PloegDetailsComponent', () => {
  let component: PloegDetailsComponent;
  let fixture: ComponentFixture<PloegDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloegDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloegDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
