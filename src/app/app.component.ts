import {Component} from '@angular/core';
import {AuthService} from "./service/auth.service";
import {Router} from "@angular/router";
import {UserService} from "./service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, router: Router, private userService: UserService) {
    auth.user$?.subscribe(user => {
      if (!user) {
        return;
      }
      userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl') as string;
      if (!returnUrl) {
        return;
      }
      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);


    })
  }
}
