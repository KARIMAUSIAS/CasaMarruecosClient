import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPlistAdminRoutedComponent } from './usuario-plist-admin-routed.component';

describe('UsuarioPlistAdminRoutedComponent', () => {
  let component: UsuarioPlistAdminRoutedComponent;
  let fixture: ComponentFixture<UsuarioPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
