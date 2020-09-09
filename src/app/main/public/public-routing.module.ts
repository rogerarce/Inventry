import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers';
import { LoginPageGuard } from 'src/app/guards/login-page.guard';
import { LoginComponent } from './containers/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginPageGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature('authState', reducer)
  ],
  exports: [RouterModule]
})
export class PublicRouting {}
