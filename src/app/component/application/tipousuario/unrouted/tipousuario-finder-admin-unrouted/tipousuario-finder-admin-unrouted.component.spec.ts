import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioFinderAdminUnroutedComponent } from './tipousuario-finder-admin-unrouted.component';

describe('TipousuarioFinderAdminUnroutedComponent', () => {
  let component: TipousuarioFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<TipousuarioFinderAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioFinderAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipousuarioFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
