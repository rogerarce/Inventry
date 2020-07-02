export interface ProductCategory {
  product_category_id: string;
  name: string;
  status: string;
  description: string;
}

export type ProductCategories = ProductCategory[];

export class ProductCategoryModel {
  constructor(
    public product_category_id: string,
    public name: string,
    public description: string,
    public status: string,
  ) {}
}
