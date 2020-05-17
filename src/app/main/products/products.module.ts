import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './containers/products/products.component';
import { ProductsRouterModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers';
import { ProductsCategoryComponent } from './containers/products-category/products-category.component';
import { ProductCategoryListComponent } from './components/product-category-list/product-category-list.component';
import { ProductsCategoryFormComponent } from './containers/products-category-form/products-category-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsFormComponent } from './containers/products-form/products-form.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsFilterComponent,
    ProductsListComponent,
    ProductsCategoryComponent,
    ProductCategoryListComponent,
    ProductsCategoryFormComponent,
    ProductsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRouterModule,
    SharedModule,
    StoreModule.forFeature('productsState', reducer)
  ]
})
export class ProductsModule { }
