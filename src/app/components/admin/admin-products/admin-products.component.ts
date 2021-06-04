import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$: Observable<any>;

  constructor(private productService:ProductService) {
    this.products$ = this.productService.getAll();
  }

  ngOnInit(): void {
  }

}
