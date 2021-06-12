import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Product} from "../models/product";
import firebase from "firebase";
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
    let itemRef = this.db.object('/shopping-carts/' + cartId + '/items/' + product.key);

    let item$ = itemRef.snapshotChanges();
    item$.pipe(take(1)).subscribe(item => {
      if(item.payload.exists()){
        // @ts-ignore
        itemRef.update({quantity: item.payload.val().quantity+1})
      } else {
        itemRef.set({product:product, quantity:1 });
      }
    })
  }
}
