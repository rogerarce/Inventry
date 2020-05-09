export interface Product {
  product_id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  created_at: Date;
  updated_at: Date;
}

export type Products = Product[];

export class ProductModel {
  constructor(product: Product) {}
}
