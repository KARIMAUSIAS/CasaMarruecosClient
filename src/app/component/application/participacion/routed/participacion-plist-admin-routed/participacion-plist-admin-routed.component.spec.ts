import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacionPlistAdminRoutedComponent } from './participacion-plist-admin-routed.component';

describe('ParticipacionPlistAdminRoutedComponent', () => {
  let component: ParticipacionPlistAdminRoutedComponent;
  let fixture: ComponentFixture<ParticipacionPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacionPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipacionPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
