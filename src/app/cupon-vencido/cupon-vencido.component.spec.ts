import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponVencidoComponent } from './cupon-vencido.component';

describe('CuponVencidoComponent', () => {
  let component: CuponVencidoComponent;
  let fixture: ComponentFixture<CuponVencidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuponVencidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuponVencidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
