import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectIsAuthenticated } from './main/public/store/selectors/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'inventory-app';
  authenticated = false;
  
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store
      .pipe(select(selectIsAuthenticated))
      .subscribe((isAuthenticated) => {        
        this.authenticated = isAuthenticated;
      });
  }
}
