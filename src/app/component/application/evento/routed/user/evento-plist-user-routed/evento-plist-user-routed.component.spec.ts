import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoPlistUserRoutedComponent } from './evento-plist-user-routed.component';

describe('EventoPlistUserRoutedComponent', () => {
  let component: EventoPlistUserRoutedComponent;
  let fixture: ComponentFixture<EventoPlistUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoPlistUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoPlistUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
