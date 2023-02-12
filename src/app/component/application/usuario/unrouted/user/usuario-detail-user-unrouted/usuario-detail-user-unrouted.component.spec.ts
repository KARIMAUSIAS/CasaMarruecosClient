import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDetailUserUnroutedComponent } from './usuario-detail-user-unrouted.component';

describe('UsuarioDetailUserUnroutedComponent', () => {
  let component: UsuarioDetailUserUnroutedComponent;
  let fixture: ComponentFixture<UsuarioDetailUserUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioDetailUserUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioDetailUserUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
