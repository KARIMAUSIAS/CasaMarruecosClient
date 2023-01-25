import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoNewAdminRoutedComponent } from './evento-new-admin-routed.component';

describe('EventoNewAdminRoutedComponent', () => {
  let component: EventoNewAdminRoutedComponent;
  let fixture: ComponentFixture<EventoNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
