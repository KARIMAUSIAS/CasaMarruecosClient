import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioDeleteAdminRoutedComponent } from './tipousuario-delete-admin-routed.component';

describe('TipousuarioDeleteAdminRoutedComponent', () => {
  let component: TipousuarioDeleteAdminRoutedComponent;
  let fixture: ComponentFixture<TipousuarioDeleteAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioDeleteAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipousuarioDeleteAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
