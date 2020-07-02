export interface Product {
  product_id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export type Products = Product[];

export class ProductModel {
  constructor(
    public product_id: string,
    public name: string,
    public price: number,
    public description: string,
    public category: string,
    public status: string,
    public created_at: Date | string,
    public updated_at: Date | string,
  ) {}
}
