import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaViewAdminRoutedComponent } from './incidencia-view-admin-routed.component';

describe('IncidenciaViewAdminRoutedComponent', () => {
  let component: IncidenciaViewAdminRoutedComponent;
  let fixture: ComponentFixture<IncidenciaViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciaViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciaViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
