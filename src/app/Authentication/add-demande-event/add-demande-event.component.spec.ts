import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemandeEventComponent } from './add-demande-event.component';

describe('AddDemandeEventComponent', () => {
  let component: AddDemandeEventComponent;
  let fixture: ComponentFixture<AddDemandeEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDemandeEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDemandeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
