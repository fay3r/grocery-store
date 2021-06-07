import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import firebase from "firebase/app";
import {Observable, of} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AppUser} from "../models/app-user";
import {switchMap} from "rxjs/operators";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private afAuth:AngularFireAuth, private route:ActivatedRoute, private userService:UserService) {

    // @ts-ignore
    this.user$ = afAuth.authState;
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    return this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.signOut();
  }

  get appUser$(): Observable<AppUser>{
    // @ts-ignore
    return this.user$?.pipe(switchMap(user => {
        if (user) {
          return this.userService.get(user.uid);
        }
        return of(null);
      }
      )
    )
  }

}
