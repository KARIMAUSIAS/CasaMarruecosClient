import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaDeleteAdminRoutedComponent } from './multimedia-delete-admin-routed.component';

describe('MultimediaDeleteAdminRoutedComponent', () => {
  let component: MultimediaDeleteAdminRoutedComponent;
  let fixture: ComponentFixture<MultimediaDeleteAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaDeleteAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultimediaDeleteAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
