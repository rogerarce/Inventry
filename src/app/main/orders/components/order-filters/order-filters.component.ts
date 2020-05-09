import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetOrderFilter } from '../../store/actions/orders';
import { OrderStatus } from 'src/app/core/models/order';

@Component({
  selector: 'app-order-filters',
  templateUrl: './order-filters.component.html',
  styleUrls: ['./order-filters.component.scss']
})
export class OrderFiltersComponent implements OnInit {

  status: OrderStatus = 'all';

  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {
  }

  statusFilter(status) {
    this.status = status;

    this.store.dispatch(new SetOrderFilter({ status }));
  }

  setDefaultFilters() {
    const status = 'all';

    this.status = status;
    this.store.dispatch(new SetOrderFilter({ status }));
  }
}
