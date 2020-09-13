import { NgModule } from '@angular/core';
import { InventoryComponent } from './containers/inventory/inventory.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { InventoryFiltersComponent } from './components/inventory-filters/inventory-filters.component';
import { InventoryFormComponent } from './containers/inventory-form/inventory-form.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers';
import { CommonModule } from '@angular/common';
import { InventoryDetailsComponent } from './containers/inventory-details/inventory-details.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductTransactionHistoryComponent } from './components/product-transaction-history/product-transaction-history.component';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule,
    SharedModule,
    StoreModule.forFeature('inventoryState', reducer),
  ],
  declarations: [
    InventoryComponent,
    InventoryListComponent,
    InventoryFiltersComponent,
    InventoryFormComponent,
    InventoryDetailsComponent,
    ProductDetailComponent,
    ProductTransactionHistoryComponent
  ],
  exports: [],
})
export class InventoryModule {}