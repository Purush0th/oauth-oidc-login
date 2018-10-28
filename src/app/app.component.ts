import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { AuthTokenService } from './shared/auth/auth.token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloApp';


  constructor(private authTokenService: AuthTokenService) {
    this.authTokenService.runInitialLoginSequence();
  }

}


