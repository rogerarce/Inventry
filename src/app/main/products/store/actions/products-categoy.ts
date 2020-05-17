import { Action } from '@ngrx/store';
import { ProductCategory, ProductCategories } from 'src/app/core/models/product-category';

export enum ProductCategoryActions {
  ADD_PRODUCT_CATEGORY = '[Feature Product] Add Product Category',
  UPDATE_PRODUCT_CATEGORY = '[Feature Product] Update Product Category',
  DELETE_PRODUCT_CATEGORY = '[Feature Product] Delete Product Category',
  LOAD_PRODUCT_CATEGORIES = '[Feature Product] Load Product Categories',
}

export class AddProductCategory implements Action {
  readonly type = ProductCategoryActions.ADD_PRODUCT_CATEGORY;

  constructor(public payload: ProductCategory) {}
}

export class UpdateProductCategory implements Action {
  readonly type = ProductCategoryActions.UPDATE_PRODUCT_CATEGORY;

  constructor(public payload: {category_id: string, category: ProductCategory}) {}
}

export class DeleteProductCategory implements Action {
  readonly type = ProductCategoryActions.DELETE_PRODUCT_CATEGORY;

  constructor(public payload: {category_id: string}) {}
}

export class LoadProductCategory implements Action {
  readonly type = ProductCategoryActions.LOAD_PRODUCT_CATEGORIES;

  constructor(public payload: ProductCategories) {}
}

export type ProductCategoryActionsType  = AddProductCategory | UpdateProductCategory | DeleteProductCategory | LoadProductCategory;
