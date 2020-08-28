import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KabanHomeComponent } from './kaban-home.component';

describe('KabanHomeComponent', () => {
  let component: KabanHomeComponent;
  let fixture: ComponentFixture<KabanHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KabanHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KabanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
