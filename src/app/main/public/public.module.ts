import { NgModule } from '@angular/core';
import { PublicRouting } from './public-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PublicRouting
  ],
  exports: [PublicRouting]
})
export class PublicModule {}
