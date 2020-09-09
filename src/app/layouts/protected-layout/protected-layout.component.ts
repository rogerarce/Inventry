import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { User } from '../../core/models/user';
import { selectAuthUser } from 'src/app/main/public/store/selectors/auth';

@Component({
  selector: 'app-protected-layout',
  templateUrl: './protected-layout.component.html',
  styleUrls: ['./protected-layout.component.scss']
})
export class ProtectedLayoutComponent implements OnInit {
  user: User;

  constructor(
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.store
      .pipe(select(selectAuthUser))
      .subscribe((user) => {
        this.user = user;
      });
  }

}
