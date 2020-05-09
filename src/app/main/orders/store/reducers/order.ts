import { OrderActions, OrderActionType } from '../actions/orders';
import { Orders, OrderStatus } from 'src/app/core/models/order';

export interface OrdersFilter {
  status: OrderStatus;
  dateRangeFrom?: Date;
  dateRangeTo?: Date;
}

export interface OrdersState {
  data: Orders;
  filters: OrdersFilter;
}

export const initialState: OrdersState = {
  data: [],
  filters: {
    status: 'all',
  }
};

export function reducer(
  state = initialState,
  action: OrderActionType
): OrdersState {
  switch (action.type) {
    case OrderActions.LOAD_ORDER:
    case OrderActions.ADD_ORDER:
    case OrderActions.UPDATE_ORDER:
    case OrderActions.DELETE_ORDER:
      return {...state, data: ordersReducer(state.data, action)};

    case OrderActions.SET_FILTER:
      return {...state, filters: action.payload};
    default:
      return state;
  }
}

export function ordersReducer(
  state: Orders = [],
  action: OrderActionType
): Orders {
  switch (action.type) {
    case OrderActions.LOAD_ORDER:
      return action.payload;
    case OrderActions.ADD_ORDER:
      return [...state, action.payload];
    case OrderActions.UPDATE_ORDER:
      return state.map((order) => {
        if (order.order_id === action.payload.order_id) {
          return {...order, ...action.payload.order};
        }

        return order;
      });
    case OrderActions.DELETE_ORDER:
      return state.filter(order => order.order_id !== action.payload.order_id);
    default:
      return state;
  }
}
