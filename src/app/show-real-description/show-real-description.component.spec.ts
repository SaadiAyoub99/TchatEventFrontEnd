import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRealDescriptionComponent } from './show-real-description.component';

describe('ShowRealDescriptionComponent', () => {
  let component: ShowRealDescriptionComponent;
  let fixture: ComponentFixture<ShowRealDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRealDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRealDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
