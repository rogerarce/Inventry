import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTransactionHistoryComponent } from './product-transaction-history.component';

describe('ProductTransactionHistoryComponent', () => {
  let component: ProductTransactionHistoryComponent;
  let fixture: ComponentFixture<ProductTransactionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTransactionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
