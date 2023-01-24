import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionNewAdminRoutedComponent } from './accion-new-admin-routed.component';

describe('AccionNewAdminRoutedComponent', () => {
  let component: AccionNewAdminRoutedComponent;
  let fixture: ComponentFixture<AccionNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
