import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private auth:AuthService, private router:Router) { }

  canActivate(route:any, state: RouterStateSnapshot):any{
    return this.auth.user$?.pipe(map(user =>{
      if(user) {
        console.log('true')
        return true;
      }
      this.router.navigate(['/login'],{queryParams:{returnUrl: state.url}});
      console.log('false')
      return false;
    }))
  }
}
