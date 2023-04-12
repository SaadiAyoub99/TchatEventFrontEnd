import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMarketplaceComponent } from './events-marketplace.component';

describe('EventsMarketplaceComponent', () => {
  let component: EventsMarketplaceComponent;
  let fixture: ComponentFixture<EventsMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsMarketplaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
