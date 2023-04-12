import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAcceptedComponent } from './all-accepted.component';

describe('AllAcceptedComponent', () => {
  let component: AllAcceptedComponent;
  let fixture: ComponentFixture<AllAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAcceptedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
