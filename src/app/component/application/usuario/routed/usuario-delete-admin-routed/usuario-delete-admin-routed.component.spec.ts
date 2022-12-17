import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDeleteAdminRoutedComponent } from './usuario-delete-admin-routed.component';

describe('UsuarioDeleteAdminRoutedComponent', () => {
  let component: UsuarioDeleteAdminRoutedComponent;
  let fixture: ComponentFixture<UsuarioDeleteAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioDeleteAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioDeleteAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
