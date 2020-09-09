import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryFiltersComponent } from './inventory-filters.component';

describe('InventoryFiltersComponent', () => {
  let component: InventoryFiltersComponent;
  let fixture: ComponentFixture<InventoryFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
