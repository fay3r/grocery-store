import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {AppUser} from "../../models/app-user";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavBarCollapsed = true;
  appUser: AppUser | undefined;


  constructor(public auth:AuthService, private route:Router) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  logout() {
    this.auth.logout();
    this.route.navigate(['/']);
  }
}
