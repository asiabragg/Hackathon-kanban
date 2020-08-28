import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KabanLandingComponent } from './kaban-landing.component';

describe('KabanLandingComponent', () => {
  let component: KabanLandingComponent;
  let fixture: ComponentFixture<KabanLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KabanLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KabanLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
