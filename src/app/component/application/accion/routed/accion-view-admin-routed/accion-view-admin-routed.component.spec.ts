import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionViewAdminRoutedComponent } from './accion-view-admin-routed.component';

describe('AccionViewAdminRoutedComponent', () => {
  let component: AccionViewAdminRoutedComponent;
  let fixture: ComponentFixture<AccionViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
