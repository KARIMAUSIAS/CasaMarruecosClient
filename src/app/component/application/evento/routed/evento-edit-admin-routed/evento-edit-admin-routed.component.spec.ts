import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoEditAdminRoutedComponent } from './evento-edit-admin-routed.component';

describe('EventoEditAdminRoutedComponent', () => {
  let component: EventoEditAdminRoutedComponent;
  let fixture: ComponentFixture<EventoEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
