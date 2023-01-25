import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDetailAdminUnroutedComponent } from './evento-detail-admin-unrouted.component';

describe('EventoDetailAdminUnroutedComponent', () => {
  let component: EventoDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<EventoDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
