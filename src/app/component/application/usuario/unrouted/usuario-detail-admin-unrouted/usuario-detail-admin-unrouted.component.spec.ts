import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDetailAdminUnroutedComponent } from './usuario-detail-admin-unrouted.component';

describe('UsuarioDetailAdminUnroutedComponent', () => {
  let component: UsuarioDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<UsuarioDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
