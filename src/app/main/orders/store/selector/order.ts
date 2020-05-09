import { createSelector } from '@ngrx/store';
import { OrdersState } from '../reducers/order';

export interface AppState {
  orderState: {
    orders: OrdersState
  };
}

export const selectOrderState = (state: AppState) => state.orderState.orders;
export const selectOrderFilter = (state: AppState) => state.orderState.orders.filters;

export const selectOrders = createSelector(
  selectOrderState,
  selectOrderFilter,
  (state: OrdersState, filters: any) => {
    const {status, dateRangeFrom, dateRangeTo} = filters;

    if (status === 'all') {
      return state.data;
    }

    return state.data.filter((order) => {
      return order.status === status;
    });
  }
);
