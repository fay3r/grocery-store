import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {AppUser} from "../../models/app-user";
import {ShoppingCartService} from "../../service/shopping-cart.service";
import {Observable} from "rxjs";
import {ShoppingCar} from "../../models/shopping-car";


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavBarCollapsed = true;
  appUser: AppUser | undefined;
  shoppingCartItemCount:number;
  cart$: Observable<ShoppingCar> | undefined;

  constructor(public auth: AuthService, private route: Router, private shoppingCartService: ShoppingCartService) {
    this.shoppingCartItemCount =0;
  }

  logout() {
    this.auth.logout();
    this.route.navigate(['/']);
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();


  }
}
