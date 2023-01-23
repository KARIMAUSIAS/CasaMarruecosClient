import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaDetailAdminUnroutedComponent } from './incidencia-detail-admin-unrouted.component';

describe('IncidenciaDetailAdminUnroutedComponent', () => {
  let component: IncidenciaDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<IncidenciaDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciaDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciaDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
