import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductCategory } from '../../../../core/models/product-category';
import { DeleteProductCategory } from '../../store/actions';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.scss']
})
export class ProductCategoryListComponent implements OnInit {

  @Input() categories;

  constructor(private store: Store<any>) { }

  ngOnInit() {}

  remove(category: ProductCategory) {
    this.store.dispatch(new DeleteProductCategory({
      category_id: category.product_category_id,
    }));
  }
}
