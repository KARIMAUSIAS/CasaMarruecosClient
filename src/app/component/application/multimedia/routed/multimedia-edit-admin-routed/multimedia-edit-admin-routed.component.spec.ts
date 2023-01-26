import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaEditAdminRoutedComponent } from './multimedia-edit-admin-routed.component';

describe('MultimediaEditAdminRoutedComponent', () => {
  let component: MultimediaEditAdminRoutedComponent;
  let fixture: ComponentFixture<MultimediaEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultimediaEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
