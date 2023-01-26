import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaDetailAdminUnroutedComponent } from './multimedia-detail-admin-unrouted.component';

describe('MultimediaDetailAdminUnroutedComponent', () => {
  let component: MultimediaDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<MultimediaDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultimediaDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
