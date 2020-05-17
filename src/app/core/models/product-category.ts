export interface ProductCategory {
  product_category_id: string;
  name: string;
  status: string;
  description: string;
}

export type ProductCategories = ProductCategory[];

export class ProductCategoryModel {
  constructor(productCategory: ProductCategory) {}
}
