import { Action } from '@ngrx/store';
import { Product, Products } from 'src/app/core/models/product';

export enum ProductActions {
  ADD_PRODUCT = '[Feature Product] Add Product',
  UPDATE_PRODUCT = '[Feature Product] Update Product',
  DELETE_PRODUCT = '[Feature Product] Delete Product',
  LOAD_PRODUCTS = '[Feature Product] Load Product',
}

export class AddProduct implements Action {
  readonly type = ProductActions.ADD_PRODUCT;

  constructor(public payload: Product) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductActions.UPDATE_PRODUCT;

  constructor(public payload: {product_id: string, product: Product}) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductActions.DELETE_PRODUCT;

  constructor(public payload: {product_id: string}) {}
}

export class LoadProduct implements Action {
  readonly type = ProductActions.LOAD_PRODUCTS;

  constructor(public payload: Products) {}
}

export type ProductActionsType = AddProduct | UpdateProduct | DeleteProduct | LoadProduct;
