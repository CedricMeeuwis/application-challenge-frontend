import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloegAanmakenComponent } from './ploeg-aanmaken.component';

describe('PloegAanmakenComponent', () => {
  let component: PloegAanmakenComponent;
  let fixture: ComponentFixture<PloegAanmakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloegAanmakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloegAanmakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
