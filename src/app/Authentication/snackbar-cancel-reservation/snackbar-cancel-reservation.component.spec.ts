import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarCancelReservationComponent } from './snackbar-cancel-reservation.component';

describe('SnackbarCancelReservationComponent', () => {
  let component: SnackbarCancelReservationComponent;
  let fixture: ComponentFixture<SnackbarCancelReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarCancelReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarCancelReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
