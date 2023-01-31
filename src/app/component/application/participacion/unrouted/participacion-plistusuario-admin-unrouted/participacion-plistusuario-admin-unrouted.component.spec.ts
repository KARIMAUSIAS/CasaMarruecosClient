import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacionPlistusuarioAdminUnroutedComponent } from './participacion-plistusuario-admin-unrouted.component';

describe('ParticipacionPlistusuarioAdminUnroutedComponent', () => {
  let component: ParticipacionPlistusuarioAdminUnroutedComponent;
  let fixture: ComponentFixture<ParticipacionPlistusuarioAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacionPlistusuarioAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipacionPlistusuarioAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
