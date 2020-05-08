import { NgModule } from '@angular/core';
import { PublicRouting } from './public-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    PublicRouting
  ],
  exports: [PublicRouting]
})
export class PublicModule {}
