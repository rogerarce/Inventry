import { Inventories } from 'src/app/core/models/inventory'
import { InventoryActions, InventoryActionTypes } from '../actions/inventory'


export interface InventoryState {
  data: Inventories;
  filters: {};
}

export const initialState: InventoryState = {
  data: [],
  filters: null,
}

export const reducer = (
  state = initialState,
  action: InventoryActionTypes
): InventoryState => {

  switch(action.type) {
    case InventoryActions.LOAD_INVENTORIES:
      return {...state, data: action.inventories};
    case InventoryActions.ADD_INVENTORIES:
      return {...state, data: [...state.data, action.inventory]};
    default:
      return state;
  }
}