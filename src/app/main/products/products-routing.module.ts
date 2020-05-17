import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './containers/products/products.component';
import { ProductsCategoryComponent } from './containers/products-category/products-category.component';
import { ProductsCategoryFormComponent } from './containers/products-category-form/products-category-form.component';
import { ProductsFormComponent } from './containers/products-form/products-form.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/new',
    component: ProductsFormComponent,
  },
  {
    path: 'products/category',
    component: ProductsCategoryComponent,
  },
  {
    path: 'products/category/new',
    component: ProductsCategoryFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRouterModule {}
