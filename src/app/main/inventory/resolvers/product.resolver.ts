import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveEnd, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Product } from '../../../core/models/product';
import { findProductSelector } from '../../products/store/selectors/products';

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<Product> {
  constructor(private store: Store<any>) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    return this.store
      .pipe(
        select(findProductSelector, { product_id: route.paramMap.get('id') }),
        map(product => {
          if (product) {
            return product;
          }

          return null;
        }),
        take(1)
      );
  }
}