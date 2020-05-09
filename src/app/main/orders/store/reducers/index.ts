import { ActionReducerMap } from '@ngrx/store';
import * as fromOrders from './order';
import { OrderActionType } from '../actions/orders';

export interface OrderState {
  orders: fromOrders.OrdersState;
}

export const reducer: ActionReducerMap<OrderState, OrderActionType> = {
  orders: fromOrders.reducer,
};
