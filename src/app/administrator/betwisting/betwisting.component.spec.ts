import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetwistingComponent } from './betwisting.component';

describe('BetwistingComponent', () => {
  let component: BetwistingComponent;
  let fixture: ComponentFixture<BetwistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetwistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetwistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
