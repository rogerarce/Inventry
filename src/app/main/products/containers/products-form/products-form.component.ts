import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddProduct } from '../../store/actions';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      status: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  addProduct(form) {
    this.store.dispatch(new AddProduct(form.value));
  }

}
