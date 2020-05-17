import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddProductCategory } from '../../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-category-form',
  templateUrl: './products-category-form.component.html',
  styleUrls: ['./products-category-form.component.scss']
})
export class ProductsCategoryFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private store: Store<any>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  addCategory(form) {
    this.store.dispatch(new AddProductCategory(form.value));

    this.router.navigate(['/products/category']);
  }
}
