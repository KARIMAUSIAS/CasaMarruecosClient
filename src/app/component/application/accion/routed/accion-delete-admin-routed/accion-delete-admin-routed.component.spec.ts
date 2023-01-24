import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionDeleteAdminRoutedComponent } from './accion-delete-admin-routed.component';

describe('AccionDeleteAdminRoutedComponent', () => {
  let component: AccionDeleteAdminRoutedComponent;
  let fixture: ComponentFixture<AccionDeleteAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionDeleteAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionDeleteAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
