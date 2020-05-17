import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoryFormComponent } from './products-category-form.component';

describe('ProductsCategoryFormComponent', () => {
  let component: ProductsCategoryFormComponent;
  let fixture: ComponentFixture<ProductsCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
