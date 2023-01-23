import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaPlistAdminRoutedComponent } from './incidencia-plist-admin-routed.component';

describe('IncidenciaPlistAdminRoutedComponent', () => {
  let component: IncidenciaPlistAdminRoutedComponent;
  let fixture: ComponentFixture<IncidenciaPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciaPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciaPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
