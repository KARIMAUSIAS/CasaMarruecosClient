import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioEditAdminRoutedComponent } from './tipousuario-edit-admin-routed.component';

describe('TipousuarioEditAdminRoutedComponent', () => {
  let component: TipousuarioEditAdminRoutedComponent;
  let fixture: ComponentFixture<TipousuarioEditAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioEditAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipousuarioEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
