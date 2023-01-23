import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaNewAdminRoutedComponent } from './incidencia-new-admin-routed.component';

describe('IncidenciaNewAdminRoutedComponent', () => {
  let component: IncidenciaNewAdminRoutedComponent;
  let fixture: ComponentFixture<IncidenciaNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciaNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciaNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
