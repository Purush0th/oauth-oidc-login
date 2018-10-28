import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { OAuthModule, AuthConfig, OAuthStorage, JwksValidationHandler, ValidationHandler } from 'angular-oauth2-oidc';
import { AuthGuard } from './shared/auth/auth.guard.service';
import { HttpClientModule } from '@angular/common/http';
import { authConfig } from './shared/auth/auth.config.constant';
import { FallbackComponent } from './fallback/fallback.component';
import { AuthTokenService } from './shared/auth/auth.token.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    FallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot()
  ],
  providers: [
    { provide: AuthConfig, useValue: authConfig },
    { provide: ValidationHandler, useClass: JwksValidationHandler },
    { provide: OAuthStorage, useValue: localStorage },
    AuthGuard,
    AuthTokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
