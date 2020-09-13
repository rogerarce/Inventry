import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Inventories } from 'src/app/core/models/inventory';
import { inventory } from '../../../../db';
import { LoadInventories } from '../../store/actions/inventory';
import { selectInventories } from '../../store/selectors/inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  $inventories: Observable<Inventories>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadInventories(inventory));

    this.$inventories = this.store.pipe(select(selectInventories));
  }

}
