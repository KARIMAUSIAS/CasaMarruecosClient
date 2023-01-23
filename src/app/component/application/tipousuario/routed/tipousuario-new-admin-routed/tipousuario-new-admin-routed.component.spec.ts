import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioNewAdminRoutedComponent } from './tipousuario-new-admin-routed.component';

describe('TipousuarioNewAdminRoutedComponent', () => {
  let component: TipousuarioNewAdminRoutedComponent;
  let fixture: ComponentFixture<TipousuarioNewAdminRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioNewAdminRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipousuarioNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
