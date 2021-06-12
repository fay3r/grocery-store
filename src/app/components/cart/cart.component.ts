import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../service/shopping-cart.service";
import {Observable} from "rxjs";
import {ShoppingCar} from "../../models/shopping-car";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart$: Observable<ShoppingCar> | undefined;

  constructor(private shoppingCartService :ShoppingCartService) { }

  async ngOnInit(){
    this.cart$ = await this.shoppingCartService.getCart();
  }

}
