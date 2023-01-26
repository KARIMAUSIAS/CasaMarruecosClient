import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaViewAdminRoutedComponent } from './multimedia-view-admin-routed.component';

describe('MultimediaViewAdminRoutedComponent', () => {
  let component: MultimediaViewAdminRoutedComponent;
  let fixture: ComponentFixture<MultimediaViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultimediaViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
