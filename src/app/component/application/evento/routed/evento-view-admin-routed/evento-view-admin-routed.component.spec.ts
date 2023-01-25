import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoViewAdminRoutedComponent } from './evento-view-admin-routed.component';

describe('EventoViewAdminRoutedComponent', () => {
  let component: EventoViewAdminRoutedComponent;
  let fixture: ComponentFixture<EventoViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
