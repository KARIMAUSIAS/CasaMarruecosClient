import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacionPlisteventoAdminUnroutedComponent } from './participacion-plistevento-admin-unrouted.component';

describe('ParticipacionPlisteventoAdminUnroutedComponent', () => {
  let component: ParticipacionPlisteventoAdminUnroutedComponent;
  let fixture: ComponentFixture<ParticipacionPlisteventoAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacionPlisteventoAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipacionPlisteventoAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
