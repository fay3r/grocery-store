import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import firebase from "firebase/app";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AppUser} from "../models/app-user";
import {map, switchAll} from "rxjs/operators";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User | null> | undefined;

  constructor(private afAuth:AngularFireAuth, private route:ActivatedRoute, private userService:UserService) {
    this.user$ = afAuth.authState;
    console.log('ussususer ',this.user$)
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    return this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.signOut();
  }


}
