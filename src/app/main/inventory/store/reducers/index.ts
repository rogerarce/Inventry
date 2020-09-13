import { ActionReducerMap } from '@ngrx/store';
import { InventoryActionTypes } from '../actions/inventory';
import * as fromOrders from './inventory';

export interface OrderState {
  inventories: fromOrders.InventoryState;
}

export const reducer: ActionReducerMap<OrderState, InventoryActionTypes> = {
  inventories: fromOrders.reducer,
};
