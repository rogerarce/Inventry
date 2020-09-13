import { Action } from '@ngrx/store';
import { IInventory, Inventories } from 'src/app/core/models/inventory';

export enum InventoryActions {
  LOAD_INVENTORIES = '[Feature Inventory] Load Inventories',
  ADD_INVENTORIES = '[Feature Inventory] Add Inventory',
}

export class LoadInventories implements Action {
  readonly type = InventoryActions.LOAD_INVENTORIES;
  
  constructor(public inventories: Inventories) {}
}

export class AddInventory implements Action {
  readonly type = InventoryActions.ADD_INVENTORIES;
  
  constructor(public inventory: IInventory) {}
}

export type InventoryActionTypes = LoadInventories | AddInventory;