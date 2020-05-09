import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRouterModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';
import { ProductsListComponent } from './components/products-list/products-list.component';



@NgModule({
  declarations: [ProductsComponent, ProductsFilterComponent, ProductsListComponent],
  imports: [
    CommonModule,
    ProductsRouterModule,
    SharedModule,
  ]
})
export class ProductsModule { }
