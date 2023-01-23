import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaEditAdminRoutedComponent } from './incidencia-edit-admin-routed.component';

describe('IncidenciaEditAdminRoutedComponent', () => {
  let component: IncidenciaEditAdminRoutedComponent;
  let fixture: ComponentFixture<IncidenciaEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciaEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciaEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
