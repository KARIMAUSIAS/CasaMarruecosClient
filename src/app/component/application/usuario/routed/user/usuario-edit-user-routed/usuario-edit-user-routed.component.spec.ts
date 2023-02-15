import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditUserRoutedComponent } from './usuario-edit-user-routed.component';

describe('UsuarioEditUserRoutedComponent', () => {
  let component: UsuarioEditUserRoutedComponent;
  let fixture: ComponentFixture<UsuarioEditUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioEditUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioEditUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
