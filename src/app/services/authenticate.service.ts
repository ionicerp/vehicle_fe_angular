import { Injectable } from '@angular/core';
import { AuthService, IdToken, User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  public user$: Observable<User | null | undefined> = this.authService.user$;
  public isLoading$: Observable<boolean> = this.authService.isLoading$;
  public isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated$;
  public idTokenClaims$: Observable<IdToken | null | undefined> = this.authService.idTokenClaims$;

  constructor(
    private authService: AuthService
  ) { }

  login() {

  }

  logout(projectName: string) {
    // clear api keys

    // call auth0 logout
    this.authService.logout({ logoutParams: { returnTo: `${document.location.origin}/${projectName}` } });
  }

  loginWithRedirect() {
    return this.authService.loginWithRedirect();
  }

  getAccessTokenSilently() {
    return this.authService.getAccessTokenSilently();
  }

  getAccessTokenSilentlyWithAudience() {
    return this.authService.getAccessTokenSilently({ authorizationParams: { audience: 'https://ionicerp.us.auth0.com/api/v2/' } })
  }
}
