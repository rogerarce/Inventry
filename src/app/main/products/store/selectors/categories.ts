import { createSelector } from '@ngrx/store';
import { ProductState } from '../reducers/index';
import { ProductsState } from '../reducers/products';

export interface AppState {
  productsState: ProductState;
}

export const productState = (state: AppState) => state.productsState.products;

export const categorySelector = createSelector(
  productState,
  (state: ProductsState) => state.categories
);
