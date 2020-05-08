import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThemeComponent } from './main/theme/theme.component';
import { AppRouting } from './app-routing.module';
import { LoginComponent } from './main/public/login/login.component';
import { PublicModule } from './main/public/public.module';
import { LayoutsModule } from './layouts/layouts.module';
import { RouterModule } from '@angular/router';

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
    AppRouting,
    PublicModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
