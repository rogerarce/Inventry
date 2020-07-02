import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/core/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() products: Products;

  constructor() { }

  ngOnInit() {}

}
