import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaPlistAdminRoutedComponent } from './multimedia-plist-admin-routed.component';

describe('MultimediaPlistAdminRoutedComponent', () => {
  let component: MultimediaPlistAdminRoutedComponent;
  let fixture: ComponentFixture<MultimediaPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultimediaPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
