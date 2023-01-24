import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionDetailAdminUnroutedComponent } from './accion-detail-admin-unrouted.component';

describe('AccionDetailAdminUnroutedComponent', () => {
  let component: AccionDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<AccionDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
