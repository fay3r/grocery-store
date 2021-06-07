import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavBarCollapsed = true;


  constructor(public auth:AuthService, private route:Router) {
  }

  logout() {
    this.auth.logout();
    this.route.navigate(['/']);
  }
}
