import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThemeComponent } from './main/theme/theme.component';
import { AppRouting } from './app-routing.module';
import { LoginComponent } from './main/public/login/login.component';
import { PublicModule } from './main/public/public.module';
import { LayoutsModule } from './layouts/layouts.module';
import { RouterModule } from '@angular/router';
import { OrdersModule } from './main/orders/orders.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store/reducers';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    LayoutsModule,
    PublicModule,
    OrdersModule,
    AppRouting,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
