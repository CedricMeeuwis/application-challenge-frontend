import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KapiteinDashboardComponent } from './kapitein-dashboard.component';

describe('KapiteinDashboardComponent', () => {
  let component: KapiteinDashboardComponent;
  let fixture: ComponentFixture<KapiteinDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KapiteinDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KapiteinDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
