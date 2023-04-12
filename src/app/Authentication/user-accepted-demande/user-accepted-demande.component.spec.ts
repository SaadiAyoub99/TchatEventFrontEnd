import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAcceptedDemandeComponent } from './user-accepted-demande.component';

describe('UserAcceptedDemandeComponent', () => {
  let component: UserAcceptedDemandeComponent;
  let fixture: ComponentFixture<UserAcceptedDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAcceptedDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAcceptedDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
