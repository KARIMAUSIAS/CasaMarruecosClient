import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioPlistAdminRoutedComponent } from './tipousuario-plist-admin-routed.component';

describe('TipousuarioPlistAdminRoutedComponent', () => {
  let component: TipousuarioPlistAdminRoutedComponent;
  let fixture: ComponentFixture<TipousuarioPlistAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioPlistAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipousuarioPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
