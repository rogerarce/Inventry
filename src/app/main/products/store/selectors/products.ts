import { createSelector } from '@ngrx/store';
import { Products } from 'src/app/core/models/product';
import { ProductState } from '../reducers/index';
import { ProductsState } from '../reducers/products';

export interface AppState {
  productsState: ProductState;
}

export const productState = (state: AppState) => state.productsState.products;

export const productSelector = createSelector(
  productState,
  (state: ProductsState) => state.products,
);

export const findProductSelector = createSelector(
  productSelector,
  (products: Products, props: { product_id: string }) => {
    return products.find(product => product.product_id === props.product_id);
  }
);
