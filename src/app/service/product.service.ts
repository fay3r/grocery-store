import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) {
  }

  create(product: any) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products').snapshotChanges() as Observable<any>;
  }

  get(productId: string) {
    return this.db.object('/products/' + productId);
  }

  update(productId: string, product: any) {
    return this.db.object('/products/'+productId).update(product);
  }

  delete(productId: string){
    return this.db.object('/products/'+productId).remove();
  }
}
