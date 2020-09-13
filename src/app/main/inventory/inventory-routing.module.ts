import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './containers/inventory/inventory.component';
import { PrivatePageGuard } from 'src/app/guards/private-page.guard';
import { InventoryFormComponent } from './containers/inventory-form/inventory-form.component';
import { InventoryDetailsComponent } from './containers/inventory-details/inventory-details.component';
import { ProductResolver } from './resolvers/product.resolver';

const routes: Routes = [
  {
    path: '',
    canActivate: [PrivatePageGuard],
    children: [
      {
        path: 'inventory',
        component: InventoryComponent
      },
      {
        path: 'inventory/:id/details',
        component: InventoryDetailsComponent,
        resolve: {
          product: ProductResolver,
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule {}