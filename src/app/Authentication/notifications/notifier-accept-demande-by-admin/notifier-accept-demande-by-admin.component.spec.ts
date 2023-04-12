import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierAcceptDemandeByAdminComponent } from './notifier-accept-demande-by-admin.component';

describe('NotifierAcceptDemandeByAdminComponent', () => {
  let component: NotifierAcceptDemandeByAdminComponent;
  let fixture: ComponentFixture<NotifierAcceptDemandeByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifierAcceptDemandeByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifierAcceptDemandeByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
