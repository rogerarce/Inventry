import { Product } from './product';

export interface IInventory {
  id?: string;
  product: Product;
  threshold: number;
  remaining_stock: number;
  total: number;
}

export type Inventories = IInventory[];

export class Inventory implements IInventory {
  constructor(
    public product: Product,
    public threshold: number,
    public remaining_stock: number,
    public total: number,
  ) {}
}