import { Product } from './product';

export type OrderStatus = 'all' | 'completed' | 'pending' | 'onhold' | 'cancel';

export interface Order {
  order_id: string;
  quantity: number;
  total: number;
  status?: OrderStatus;
  product?: Product;
  created_at: Date;
  updated_at: Date;
}

export type Orders = Order[];

export class OrderModel implements Order {
  created_at = new Date();
  updated_at = new Date();

  constructor(
    public order_id,
    public quantity,
    public total,
    public status,
    public product
  ) {}
}
