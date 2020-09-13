import { createSelector } from '@ngrx/store';
import { InventoryState } from '../reducers/inventory';

export interface AppState {
  inventoryState: {
    inventories: InventoryState
  };
}

export const selectInventryState = (state: AppState) => state.inventoryState.inventories;
export const selectInventoryFilter = (state: AppState) => state.inventoryState.inventories.filters;

export const selectInventories = createSelector(
  selectInventryState,
  selectInventoryFilter,
  (state: InventoryState, filters: any) => state.data,
);
