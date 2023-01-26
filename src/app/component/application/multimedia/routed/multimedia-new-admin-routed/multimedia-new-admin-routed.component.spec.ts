import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaNewAdminRoutedComponent } from './multimedia-new-admin-routed.component';

describe('MultimediaNewAdminRoutedComponent', () => {
  let component: MultimediaNewAdminRoutedComponent;
  let fixture: ComponentFixture<MultimediaNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultimediaNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
