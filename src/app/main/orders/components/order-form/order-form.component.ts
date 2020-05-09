import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Products } from 'src/app/core/models/product';
import { product } from 'src/app/db';
import { OrderModel } from 'src/app/core/models/order';
import { AddOrder } from '../../store/actions/orders';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  form: FormGroup;
  products: Products;

  constructor(
    private store: Store<any>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      product_id: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      contact_info: new FormGroup({
        email: new FormControl('', [Validators.required]),
        cc_email: new FormControl('', [Validators.required]),
        phone_number: new FormControl('', [Validators.required]),
      }),
    });

    this.products = product;
  }

  submit(form) {
    const { quantity, status, product_id } = form.value;
    const orderProd = product[+product_id - 1];
    const order = new OrderModel('5', quantity, (quantity * orderProd.price), status, orderProd);

    this.store.dispatch(new AddOrder(order));
    this.router.navigate(['/orders']);
  }

}
