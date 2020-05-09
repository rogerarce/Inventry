import { NgModule } from '@angular/core';
import { SiteHeadComponent } from './components/site-head/site-head.component';

@NgModule({
  declarations: [
    SiteHeadComponent,
  ],
  exports: [
    SiteHeadComponent,
  ]
})
export class SharedModule {}
