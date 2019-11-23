import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponCanjeadoComponent } from './cupon-canjeado.component';

describe('CuponCanjeadoComponent', () => {
  let component: CuponCanjeadoComponent;
  let fixture: ComponentFixture<CuponCanjeadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuponCanjeadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuponCanjeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
