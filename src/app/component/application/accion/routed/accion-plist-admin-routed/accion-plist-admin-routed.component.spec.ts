import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionPlistAdminRoutedComponent } from './accion-plist-admin-routed.component';

describe('AccionPlistAdminRoutedComponent', () => {
  let component: AccionPlistAdminRoutedComponent;
  let fixture: ComponentFixture<AccionPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
