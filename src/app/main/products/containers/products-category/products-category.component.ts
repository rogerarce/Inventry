import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { categorySelector } from '../../store/selectors/categories';
import { Observable } from 'rxjs';
import { ProductCategories } from 'src/app/core/models/product-category';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss']
})
export class ProductsCategoryComponent implements OnInit {

  categories$: Observable<ProductCategories>;

  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.categories$ = this.store.pipe(select(categorySelector));
  }

}
