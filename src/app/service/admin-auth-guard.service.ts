import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import {AuthService} from "./auth.service";
import {map, mapTo, switchMap} from "rxjs/operators";
import {UserService} from "./user.service";
import firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{
  bool: boolean | undefined;

  constructor(private auth:AuthService,private userService: UserService) { }

  canActivate() {
    //@TODO: admin guard
    // @ts-ignore
    //this.auth.user$?.pipe(switchMap(async (user) => this.userService.get(user.uid)),map(user => user.valueChanges())).subscribe(user => user.subscribe(usser => this.bool = usser.isAdmin   ));
    //console.log('bool', this.bool);
    // @ts-ignore
    return true;
  }
}
