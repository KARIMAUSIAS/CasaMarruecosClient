import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditAdminRoutedComponent } from './usuario-edit-admin-routed.component';

describe('UsuarioEditAdminRoutedComponent', () => {
  let component: UsuarioEditAdminRoutedComponent;
  let fixture: ComponentFixture<UsuarioEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
