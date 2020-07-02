import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddProduct } from '../../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private store: Store<any>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      status: new FormControl('', [Validators.required]),
      category: new FormControl('', []),
      description: new FormControl('', [Validators.required]),
    });
  }

  addProduct(form) {
    this.store.dispatch(new AddProduct({ ...form.value, created_at: new Date() }));

    this.router.navigate(['products']);
  }
}
