import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {createProductArray, Product} from "../../models/product";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {ShoppingCartService} from "../../service/shopping-cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  category: string | null = '';
  filteredProduct: Product[] | undefined;
  cart: any;
  subscription: Subscription | undefined;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private shoppingCartService: ShoppingCartService) {


    this.productService.getAll().pipe(switchMap(products => {
      this.products = createProductArray(products);
      return route.queryParamMap;
    }))
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProduct = this.category ? this.products.filter(p => p.category == this.category) : this.products;
      });
  }

  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart()).subscribe(cart => {
      // @ts-ignore
      this.cart = cart.payload.val().items
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }


}
