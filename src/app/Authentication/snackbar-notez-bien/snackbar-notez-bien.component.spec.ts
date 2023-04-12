import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarNotezBienComponent } from './snackbar-notez-bien.component';

describe('SnackbarNotezBienComponent', () => {
  let component: SnackbarNotezBienComponent;
  let fixture: ComponentFixture<SnackbarNotezBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarNotezBienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarNotezBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
