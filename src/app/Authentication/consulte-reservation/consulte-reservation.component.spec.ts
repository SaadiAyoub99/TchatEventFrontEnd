import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulteReservationComponent } from './consulte-reservation.component';

describe('ConsulteReservationComponent', () => {
  let component: ConsulteReservationComponent;
  let fixture: ComponentFixture<ConsulteReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulteReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulteReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
