import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournooiBeheerComponent } from './tournooi-beheer.component';

describe('TournooiBeheerComponent', () => {
  let component: TournooiBeheerComponent;
  let fixture: ComponentFixture<TournooiBeheerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournooiBeheerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournooiBeheerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
