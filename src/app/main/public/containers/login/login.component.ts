import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { user } from '../../../../db';
import { Login } from '../../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private store: Store<any>,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  authenticateUser() {
    this.store.dispatch(new Login(user));

    this.router.navigate(['/orders']);
  }
}
