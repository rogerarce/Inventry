import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventories } from 'src/app/core/models/inventory';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

  @Input() inventories;

  constructor() { }

  ngOnInit() {
  }

}
