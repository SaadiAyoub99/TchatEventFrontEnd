import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierDeleteEventByAdminComponent } from './notifier-delete-event-by-admin.component';

describe('NotifierDeleteEventByAdminComponent', () => {
  let component: NotifierDeleteEventByAdminComponent;
  let fixture: ComponentFixture<NotifierDeleteEventByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifierDeleteEventByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifierDeleteEventByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
