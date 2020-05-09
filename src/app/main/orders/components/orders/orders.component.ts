import { Component, OnInit } from '@angular/core';
import { orders } from 'src/app/db';
import { Store, select } from '@ngrx/store';
import { LoadOrders } from '../../store/actions/orders';
import { selectOrders } from '../../store';
import { Observable } from 'rxjs';
import { Orders } from 'src/app/core/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  $orders: Observable<Orders>;

  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadOrders(orders));

    this.$orders = this.store.pipe(select(selectOrders));
  }

}
