import { NgModule } from '@angular/core';
import { InventoryComponent } from './containers/inventory/inventory.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { InventoryFiltersComponent } from './components/inventory-filters/inventory-filters.component';
import { InventoryFormComponent } from './containers/inventory-form/inventory-form.component';

@NgModule({
  imports: [
    InventoryRoutingModule,
    SharedModule,
  ],
  exports: [],
  declarations: [InventoryComponent, InventoryListComponent, InventoryFiltersComponent, InventoryFormComponent]
})
export class InventoryModule {}