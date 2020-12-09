import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitieBeherenComponent } from './competitie-beheren.component';

describe('CompetitieBeherenComponent', () => {
  let component: CompetitieBeherenComponent;
  let fixture: ComponentFixture<CompetitieBeherenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitieBeherenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitieBeherenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
