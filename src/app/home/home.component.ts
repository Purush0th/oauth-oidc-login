import { Component, OnInit } from '@angular/core';
import { AuthTokenService } from '../shared/auth/auth.token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private authTokenService: AuthTokenService) {
  }
  ngOnInit() {
  }

  login() {
    this.authTokenService.login();
  }

  logout() {
    this.authTokenService.logout();
  }

  get givenName() {
    const claims = this.authTokenService.identityClaims;
    if (!claims) {
      return null;
    }
    return claims['name'];
  }
}
