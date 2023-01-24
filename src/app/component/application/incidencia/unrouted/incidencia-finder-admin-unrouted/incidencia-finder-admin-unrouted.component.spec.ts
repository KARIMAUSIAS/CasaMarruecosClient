import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaFinderAdminUnroutedComponent } from './incidencia-finder-admin-unrouted.component';

describe('IncidenciaFinderAdminUnroutedComponent', () => {
  let component: IncidenciaFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<IncidenciaFinderAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciaFinderAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciaFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
