import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.scss']
})
export class ProductCategoryListComponent implements OnInit {

  @Input() categories;

  constructor() { }

  ngOnInit() {
  }

}
