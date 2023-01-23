import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioDetailAdminUnroutedComponent } from './tipousuario-detail-admin-unrouted.component';

describe('TipousuarioDetailAdminUnroutedComponent', () => {
  let component: TipousuarioDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<TipousuarioDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipousuarioDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
