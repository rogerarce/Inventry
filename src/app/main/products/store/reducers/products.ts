import { Products } from 'src/app/core/models/product';
import {
  ProductActionsType, ProductActions,
  ProductCategoryActions, ProductCategoryActionsType,
} from '../actions';
import { ProductCategories } from 'src/app/core/models/product-category';


export interface ProductsState {
  products: Products;
  categories: ProductCategories;
}

export const initialState: ProductsState = {
  products: [],
  categories: [{
    product_category_id: '1',
    name: 'sample',
    description: 'sample category description',
    status: 'active',
  }],
};

export const reducer = (
  state = initialState,
  action: ProductActionsType | ProductCategoryActionsType
): ProductsState => {
  switch (action.type) {
    case ProductActions.LOAD_PRODUCTS:
    case ProductActions.ADD_PRODUCT:
    case ProductActions.UPDATE_PRODUCT:
    case ProductActions.DELETE_PRODUCT:
      return {...state, products: productsReducer(state.products, action)};

    case ProductCategoryActions.ADD_PRODUCT_CATEGORY:
    case ProductCategoryActions.UPDATE_PRODUCT_CATEGORY:
    case ProductCategoryActions.DELETE_PRODUCT_CATEGORY:
    case ProductCategoryActions.LOAD_PRODUCT_CATEGORIES:
      return {...state, categories: productCategoryReducer(state.categories, action)};

    default:
      return state;
  }
};

export const productCategoryReducer = (
  state = [],
  action: ProductCategoryActionsType
) => {
  switch (action.type) {
    case ProductCategoryActions.LOAD_PRODUCT_CATEGORIES:
      return action.payload;
    case ProductCategoryActions.ADD_PRODUCT_CATEGORY:
      return [...state, action.payload];
    case ProductCategoryActions.UPDATE_PRODUCT_CATEGORY:
      return state.map((category) => {
        if (category.product_category_id === action.payload.category_id) {
          return {...category, ...action.payload.category};
        }
        return category;
      });
    case ProductCategoryActions.DELETE_PRODUCT_CATEGORY:
      return state.filter((category) => category.product_category_id !== action.payload.category_id);
    default:
      return state;
  }
};

export const productsReducer = (
  state = [],
  action: ProductActionsType
) => {
  switch (action.type) {
    case ProductActions.LOAD_PRODUCTS:
      return action.payload;
    case ProductActions.ADD_PRODUCT:
      return [...state, action.payload];
    case ProductActions.UPDATE_PRODUCT:
      return state.map((product) => {
        if (product.product_id === action.payload.product_id) {
          return {...product, ...action.payload.product};
        }
        return product;
      });
    case ProductActions.DELETE_PRODUCT:
      return state.filter((product) => product.product_id !== action.payload.product_id);
    default:
      return state;
  }
};
