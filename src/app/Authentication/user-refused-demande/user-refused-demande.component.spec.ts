import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRefusedDemandeComponent } from './user-refused-demande.component';

describe('UserRefusedDemandeComponent', () => {
  let component: UserRefusedDemandeComponent;
  let fixture: ComponentFixture<UserRefusedDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRefusedDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRefusedDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
