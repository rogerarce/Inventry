import { Products } from 'src/app/core/models/product';
import { ProductActionsType, ProductActions } from '../actions';


export interface ProductsState {
  data: Products;
}

export const initialState: ProductsState = {
  data: [],
};

export const reducer = (state = initialState, action: ProductActionsType): ProductsState => {
  switch (action.type) {
    case ProductActions.LOAD_PRODUCTS:
      return {...state, data: action.payload};
    case ProductActions.ADD_PRODUCT:
      return {...state, data: [...state.data, action.payload]};
    case ProductActions.UPDATE_PRODUCT:
      return {...state, data: state.data.map((product) => {
        if (product.product_id === action.payload.product_id) {
          return {...product, ...action.payload.product};
        }
        return product;
      })};
    case ProductActions.DELETE_PRODUCT:
      return {...state, data: state.data.filter((product) => product.product_id !== action.payload.product_id)};
    default:
      return state;
  }
};

