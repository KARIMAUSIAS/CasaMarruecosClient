import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNewAdminRoutedComponent } from './usuario-new-admin-routed.component';

describe('UsuarioNewAdminRoutedComponent', () => {
  let component: UsuarioNewAdminRoutedComponent;
  let fixture: ComponentFixture<UsuarioNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
