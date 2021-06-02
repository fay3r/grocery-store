import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(public auth:AuthService) {
  }

  logout() {
    this.auth.logout();
  }
}
