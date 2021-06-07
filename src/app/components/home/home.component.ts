import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {createProductArray, Product} from "../../models/product";
import {Subscription} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  subscription: Subscription;

  constructor( private productService:ProductService) {
    this.subscription = this.productService.getAll().subscribe(products => {
      this.products = createProductArray(products);
    });
  }

  ngOnInit(): void {}

}
