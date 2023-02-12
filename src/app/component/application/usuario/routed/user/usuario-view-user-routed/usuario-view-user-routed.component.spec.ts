import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioViewUserRoutedComponent } from './usuario-view-user-routed.component';

describe('UsuarioViewUserRoutedComponent', () => {
  let component: UsuarioViewUserRoutedComponent;
  let fixture: ComponentFixture<UsuarioViewUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioViewUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioViewUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
