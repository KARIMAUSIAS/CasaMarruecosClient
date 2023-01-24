import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionEditAdminRoutedComponent } from './accion-edit-admin-routed.component';

describe('AccionEditAdminRoutedComponent', () => {
  let component: AccionEditAdminRoutedComponent;
  let fixture: ComponentFixture<AccionEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
