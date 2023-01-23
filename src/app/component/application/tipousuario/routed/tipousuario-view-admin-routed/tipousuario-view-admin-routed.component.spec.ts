import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioViewAdminRoutedComponent } from './tipousuario-view-admin-routed.component';

describe('TipousuarioViewAdminRoutedComponent', () => {
  let component: TipousuarioViewAdminRoutedComponent;
  let fixture: ComponentFixture<TipousuarioViewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioViewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipousuarioViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
