import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private db:AngularFireDatabase) { }

  getCategories(){
    return this.db.list('/categories', ref => ref.orderByChild('name')).snapshotChanges() as Observable<any>;
  }
}
