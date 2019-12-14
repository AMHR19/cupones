import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignCuponComponent } from './design-cupon.component';

describe('DesignCuponComponent', () => {
  let component: DesignCuponComponent;
  let fixture: ComponentFixture<DesignCuponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignCuponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
