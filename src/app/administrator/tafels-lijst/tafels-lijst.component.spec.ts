import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TafelsLijstComponent } from './tafels-lijst.component';

describe('TafelsLijstComponent', () => {
  let component: TafelsLijstComponent;
  let fixture: ComponentFixture<TafelsLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafelsLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TafelsLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
