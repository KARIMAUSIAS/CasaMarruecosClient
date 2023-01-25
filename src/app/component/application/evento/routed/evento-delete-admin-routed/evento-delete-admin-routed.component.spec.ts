import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDeleteAdminRoutedComponent } from './evento-delete-admin-routed.component';

describe('EventoDeleteAdminRoutedComponent', () => {
  let component: EventoDeleteAdminRoutedComponent;
  let fixture: ComponentFixture<EventoDeleteAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoDeleteAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoDeleteAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
