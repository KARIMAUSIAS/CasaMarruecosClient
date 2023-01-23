import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaDeleteAdminRoutedComponent } from './incidencia-delete-admin-routed.component';

describe('IncidenciaDeleteAdminRoutedComponent', () => {
  let component: IncidenciaDeleteAdminRoutedComponent;
  let fixture: ComponentFixture<IncidenciaDeleteAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciaDeleteAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciaDeleteAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
