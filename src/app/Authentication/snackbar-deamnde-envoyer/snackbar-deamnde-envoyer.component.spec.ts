import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarDeamndeEnvoyerComponent } from './snackbar-deamnde-envoyer.component';

describe('SnackbarDeamndeEnvoyerComponent', () => {
  let component: SnackbarDeamndeEnvoyerComponent;
  let fixture: ComponentFixture<SnackbarDeamndeEnvoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarDeamndeEnvoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarDeamndeEnvoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
