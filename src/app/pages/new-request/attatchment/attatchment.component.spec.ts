import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttatchmentComponent } from './attatchment.component';

describe('AttatchmentComponent', () => {
  let component: AttatchmentComponent;
  let fixture: ComponentFixture<AttatchmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttatchmentComponent]
    });
    fixture = TestBed.createComponent(AttatchmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
