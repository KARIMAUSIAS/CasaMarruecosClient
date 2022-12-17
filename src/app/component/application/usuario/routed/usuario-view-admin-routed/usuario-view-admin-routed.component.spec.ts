import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioViewAdminRoutedComponent } from './usuario-view-admin-routed.component';

describe('UsuarioViewAdminRoutedComponent', () => {
  let component: UsuarioViewAdminRoutedComponent;
  let fixture: ComponentFixture<UsuarioViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
