import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverzichtWedstrijdenComponent } from './overzicht-wedstrijden.component';

describe('OverzichtWedstrijdenComponent', () => {
  let component: OverzichtWedstrijdenComponent;
  let fixture: ComponentFixture<OverzichtWedstrijdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverzichtWedstrijdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverzichtWedstrijdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
