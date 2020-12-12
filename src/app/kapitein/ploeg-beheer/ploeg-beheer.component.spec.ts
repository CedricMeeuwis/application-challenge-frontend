import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloegBeheerComponent } from './ploeg-beheer.component';

describe('PloegBeheerComponent', () => {
  let component: PloegBeheerComponent;
  let fixture: ComponentFixture<PloegBeheerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloegBeheerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloegBeheerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
