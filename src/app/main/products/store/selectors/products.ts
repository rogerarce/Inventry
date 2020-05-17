import { createSelector } from '@ngrx/store';
import { ProductState } from '../reducers/index';
import { ProductsState } from '../reducers/products';

export interface AppState {
  productState: ProductState;
}

export const productState = (state: AppState) => state.productState.products;

export const productSelector = createSelector(
  productState,
  (state: ProductsState) => state.products
);
