import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing.module';
import { PublicModule } from './main/public/public.module';
import { LayoutsModule } from './layouts/layouts.module';
import { RouterModule } from '@angular/router';
import { OrdersModule } from './main/orders/orders.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store/reducers';
import { environment } from 'src/environments/environment';
import { ProductsModule } from './main/products/products.module';
import { InventoryModule } from './main/inventory/inventory.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    LayoutsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    PublicModule,
    ProductsModule,
    OrdersModule,
    InventoryModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
