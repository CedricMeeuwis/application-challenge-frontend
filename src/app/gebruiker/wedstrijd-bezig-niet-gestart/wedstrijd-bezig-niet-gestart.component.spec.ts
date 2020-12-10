import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedstrijdBezigNietGestartComponent } from './wedstrijd-bezig-niet-gestart.component';

describe('WedstrijdBezigNietGestartComponent', () => {
  let component: WedstrijdBezigNietGestartComponent;
  let fixture: ComponentFixture<WedstrijdBezigNietGestartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedstrijdBezigNietGestartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedstrijdBezigNietGestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
