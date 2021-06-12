import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Product} from "../models/product";
import {map, take} from "rxjs/operators";
import {Observable} from "rxjs";
import {ShoppingCar} from "../models/shopping-car";


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

  async getCart(): Promise<Observable<ShoppingCar>> {
    let cartId = await this.getOrCreateCartId();

    return this.db
      .object('/shopping-carts/' + cartId)
      .valueChanges()    // @ts-ignore
      .pipe(map((x) => new ShoppingCar(x['items'])));
  }

  private async getOrCreateCartId():Promise<string> {
    let cartId = localStorage.getItem('cartID');
    if (!cartId) {

      let result = await this.create();
      localStorage.setItem('cartID', <string>result.key);
      return <string>result.key
    }
    return cartId;
  }

  private getItem(cartId: string, productId: string){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  async addToCart(product:Product ){
    this.updateItem(product as Product,-1)
  }

  async removeFromCart(product: Product) {
    this.updateItem(product as Product,1)
  }

  private async updateItem(product:Product,change:number){
    let cartId = await this.getOrCreateCartId();
    // @ts-ignore
    let itemRef = this.getItem(cartId,product.key)

    let item$ = itemRef.snapshotChanges();
    item$.pipe(take(1)).subscribe(item => {
      if(item.payload.exists()){
        // @ts-ignore
        itemRef.update({quantity: item.payload.val().quantity-change})
      } else {
        itemRef.set({product:product,quantity:1})
      }
    })
  }
}
