import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { PrivatePageGuard } from 'src/app/guards/private-page.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [PrivatePageGuard],
    children: [
      {
        path: 'orders',
        component: OrdersComponent,
      },
      {
        path: 'orders/new',
        component: OrderFormComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRouterModule {}
