import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartReservationComponent } from './cart-reservation.component';

describe('CartReservationComponent', () => {
  let component: CartReservationComponent;
  let fixture: ComponentFixture<CartReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
