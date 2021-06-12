import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Product} from "../models/product";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) {
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dataCreated: new Date().getTime()
    });

  }

  private getCart(cartId: String) {
    return this.db.object("/shopping-carts" + cartId);
  }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartID');
    if (!cartId) {

      let result = await this.create();
      localStorage.setItem('cartID', <string>result.key);
      return result.key
    }
    return cartId;
  }

  async addToCart(product:Product | undefined){
    let cartId = await this.getOrCreateCartId();
    // @ts-ignore
    let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.key);

    item$.snapshotChanges().pipe(take(1)).subscribe(item => {
      if(item$){

      } else {

      }
    })
  }
}
