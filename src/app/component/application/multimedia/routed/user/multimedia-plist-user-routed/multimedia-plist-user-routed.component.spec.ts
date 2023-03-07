import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaPlistUserRoutedComponent } from './multimedia-plist-user-routed.component';

describe('MultimediaPlistUserRoutedComponent', () => {
  let component: MultimediaPlistUserRoutedComponent;
  let fixture: ComponentFixture<MultimediaPlistUserRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaPlistUserRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultimediaPlistUserRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
