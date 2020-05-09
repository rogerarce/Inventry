import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFiltersComponent } from './order-filters.component';

describe('OrderFiltersComponent', () => {
  let component: OrderFiltersComponent;
  let fixture: ComponentFixture<OrderFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
