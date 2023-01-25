import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoPlistAdminRoutedComponent } from './evento-plist-admin-routed.component';

describe('EventoPlistAdminRoutedComponent', () => {
  let component: EventoPlistAdminRoutedComponent;
  let fixture: ComponentFixture<EventoPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
