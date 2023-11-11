import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPopupComponent } from './apply-popup.component';

describe('ApplyPopupComponent', () => {
  let component: ApplyPopupComponent;
  let fixture: ComponentFixture<ApplyPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyPopupComponent]
    });
    fixture = TestBed.createComponent(ApplyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
