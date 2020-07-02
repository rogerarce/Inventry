import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { productSelector } from '../../store/selectors/products';

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
    this.products$ = this.store.pipe(select(productSelector));
  }

}
