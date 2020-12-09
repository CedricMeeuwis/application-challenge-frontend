import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTournooiComponent } from './manage-tournooi.component';

describe('ManageTournooiComponent', () => {
  let component: ManageTournooiComponent;
  let fixture: ComponentFixture<ManageTournooiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTournooiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTournooiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
