import { ProductsState } from './products';
import { ActionReducerMap } from '@ngrx/store';
import { ProductActionsType, ProductCategoryActionsType } from '../actions';
import * as fromProducts from './products';

export interface ProductState {
  products: ProductsState;
}

export const reducer: ActionReducerMap<ProductState, ProductActionsType | ProductCategoryActionsType> = {
  products: fromProducts.reducer
};
