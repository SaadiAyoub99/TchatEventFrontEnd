import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPendingComponent } from './all-pending.component';

describe('AllPendingComponent', () => {
  let component: AllPendingComponent;
  let fixture: ComponentFixture<AllPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
