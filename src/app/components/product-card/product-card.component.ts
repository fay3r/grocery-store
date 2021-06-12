import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ShoppingCartService} from "../../service/shopping-cart.service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product')
  product: Product | undefined;

  @Input('show-actions')
  showActions = true;

  @Input('shopping-cart')
  shoppingCart: any;

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.shoppingCartService.addToCart(this.product as Product);

  }

  getQuantity() {

    if (!this.shoppingCart ) {
      return 0;
    }
    // @ts-ignore
    let item = this.shoppingCart[this.product.key ]
    return item ? item.quantity : 0;

  }

  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.product as Product);

  }
}
