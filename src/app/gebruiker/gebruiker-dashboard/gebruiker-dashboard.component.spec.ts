import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikerDashboardComponent } from './gebruiker-dashboard.component';

describe('GebruikerDashboardComponent', () => {
  let component: GebruikerDashboardComponent;
  let fixture: ComponentFixture<GebruikerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebruikerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebruikerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
