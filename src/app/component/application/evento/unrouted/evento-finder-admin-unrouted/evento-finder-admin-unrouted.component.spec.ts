import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoFinderAdminUnroutedComponent } from './evento-finder-admin-unrouted.component';

describe('EventoFinderAdminUnroutedComponent', () => {
  let component: EventoFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<EventoFinderAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoFinderAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
