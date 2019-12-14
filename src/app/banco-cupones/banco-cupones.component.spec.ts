import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoCuponesComponent } from './banco-cupones.component';

describe('BancoCuponesComponent', () => {
  let component: BancoCuponesComponent;
  let fixture: ComponentFixture<BancoCuponesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoCuponesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoCuponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
