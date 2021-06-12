import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {AppUser} from "../../models/app-user";
import {ShoppingCartService} from "../../service/shopping-cart.service";
import {createShoppingItems} from "../../models/shopping-cart-item";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavBarCollapsed = true;
  appUser: AppUser | undefined;
  shoppingCartItemCount:number;

  constructor(public auth: AuthService, private route: Router, private shoppingCartService: ShoppingCartService) {
    this.shoppingCartItemCount =0;
  }

  logout() {
    this.auth.logout();
    this.route.navigate(['/']);
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    let cart$ = await this.shoppingCartService.getCart();
    // @ts-ignore
    cart$.subscribe(cart => {
      this.shoppingCartItemCount =0;
      // @ts-ignore
      const items = cart.payload.val().items;
      for (const productId in items) {
        this.shoppingCartItemCount += items[productId].quantity
      }
    })

  }
}
