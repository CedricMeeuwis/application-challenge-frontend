import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloegenBeherenComponent } from './ploegen-beheren.component';

describe('PloegenBeherenComponent', () => {
  let component: PloegenBeherenComponent;
  let fixture: ComponentFixture<PloegenBeherenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloegenBeherenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloegenBeherenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
