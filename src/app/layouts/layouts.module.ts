import { NgModule } from '@angular/core';
import { ProtectedLayoutComponent } from './protected-layout/protected-layout.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ProtectedLayoutComponent, PublicLayoutComponent],
  exports: [ProtectedLayoutComponent, PublicLayoutComponent]
})
export class LayoutsModule {}
