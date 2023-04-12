import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarSupprimerEventComponent } from './snackbar-supprimer-event.component';

describe('SnackbarSupprimerEventComponent', () => {
  let component: SnackbarSupprimerEventComponent;
  let fixture: ComponentFixture<SnackbarSupprimerEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarSupprimerEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarSupprimerEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
