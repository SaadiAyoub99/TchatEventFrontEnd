import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarDemandeAnnulerComponent } from './snackbar-demande-annuler.component';

describe('SnackbarDemandeAnnulerComponent', () => {
  let component: SnackbarDemandeAnnulerComponent;
  let fixture: ComponentFixture<SnackbarDemandeAnnulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarDemandeAnnulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarDemandeAnnulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
