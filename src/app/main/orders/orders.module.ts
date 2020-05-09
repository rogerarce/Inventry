import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersRouterModule } from './orders-router.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderFiltersComponent } from './components/order-filters/order-filters.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers';

@NgModule({
  declarations: [
    OrdersComponent,
    OrderFiltersComponent,
    OrderListComponent,
    OrderFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrdersRouterModule,
    SharedModule,
    StoreModule.forFeature('orderState', reducer),
  ]
})
export class OrdersModule { }
