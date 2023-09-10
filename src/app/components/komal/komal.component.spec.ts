import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomalComponent } from './komal.component';

describe('KomalComponent', () => {
  let component: KomalComponent;
  let fixture: ComponentFixture<KomalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KomalComponent]
    });
    fixture = TestBed.createComponent(KomalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
