import { Action } from '@ngrx/store';

import { Order, Orders, OrderStatus } from 'src/app/core/models/order';

export enum OrderActions {
  ADD_ORDER = '[Feature Order] Add Order',
  UPDATE_ORDER = '[Feature Order] Update Order',
  DELETE_ORDER = '[Feature Order] Delete Order',
  LOAD_ORDER = '[Feature Order] Load Orders',
  LOAD_REQUEST = '[Feature Order] Load Request',
  SET_FILTER = '[Feature Order] Set Filter',
}

export class AddOrder implements Action {
  readonly type = OrderActions.ADD_ORDER;

  constructor(public payload: Order) {}
}

export class UpdateOrder implements Action {
  readonly type = OrderActions.UPDATE_ORDER;

  constructor(public payload: { order_id: string, order: Order }) {}
}

export class DeleteOrder implements Action {
  readonly type = OrderActions.DELETE_ORDER;

  constructor(public payload: { order_id: string }) {}
}

export class LoadOrders implements Action {
  readonly type = OrderActions.LOAD_ORDER;

  constructor(public payload: Orders) {}
}

export class SetOrderFilter implements Action {
  readonly type = OrderActions.SET_FILTER;

  constructor(public payload: { status: OrderStatus, dateRangeFrom?: Date, dateRangeTo?: Date}) {}
}

export type OrderActionType = AddOrder | UpdateOrder | DeleteOrder | LoadOrders | SetOrderFilter;
