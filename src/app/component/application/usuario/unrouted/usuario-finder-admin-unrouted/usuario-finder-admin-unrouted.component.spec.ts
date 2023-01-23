import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFinderAdminUnroutedComponent } from './usuario-finder-admin-unrouted.component';

describe('UsuarioFinderAdminUnroutedComponent', () => {
  let component: UsuarioFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<UsuarioFinderAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioFinderAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
