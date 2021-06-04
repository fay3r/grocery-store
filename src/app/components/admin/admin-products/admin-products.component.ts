import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: any[] = [];
  subscription: Subscription;
  filteredProduct: any[] = [];

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe(products => this.filteredProduct = this.products = products);
  }

  ngOnInit(): void {
  }

  filter(query: string) {
    this.filteredProduct = (query) ? this.products.filter( product => product.payload.val().title.toLowerCase().includes(query.toLowerCase())) : this.products;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
