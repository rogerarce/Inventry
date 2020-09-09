import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './containers/inventory/inventory.component';
import { PrivatePageGuard } from 'src/app/guards/private-page.guard';
import { InventoryFormComponent } from './containers/inventory-form/inventory-form.component';

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
        path: 'inventory/new',
        component: InventoryFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule {}