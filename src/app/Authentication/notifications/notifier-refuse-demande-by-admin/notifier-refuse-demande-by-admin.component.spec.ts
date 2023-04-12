import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierRefuseDemandeByAdminComponent } from './notifier-refuse-demande-by-admin.component';

describe('NotifierRefuseDemandeByAdminComponent', () => {
  let component: NotifierRefuseDemandeByAdminComponent;
  let fixture: ComponentFixture<NotifierRefuseDemandeByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifierRefuseDemandeByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifierRefuseDemandeByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
