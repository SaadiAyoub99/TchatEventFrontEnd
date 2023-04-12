import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPendingDemandeComponent } from './user-pending-demande.component';

describe('UserPendingDemandeComponent', () => {
  let component: UserPendingDemandeComponent;
  let fixture: ComponentFixture<UserPendingDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPendingDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPendingDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
