import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadProduct } from '../../store/actions';
import { productSelector } from '../../store/selectors/products';
import { product } from '../../../../db';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // async list of products
  products$: Observable<any>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new LoadProduct(product));

    this.products$ = this.store.pipe(select(productSelector));
  }

}
