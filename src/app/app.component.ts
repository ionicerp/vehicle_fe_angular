import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './services/authenticate.service';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vehicle_fe_angular';

  token: string = '';

  constructor(
    public authenticateService: AuthenticateService,
  ) { }

  ngOnInit(): void {
    this.initConfig();
  }

  async initConfig() {
    const user = await firstValueFrom(this.authenticateService.user$);
    console.log(user);
    const tokenClaim = await firstValueFrom(this.authenticateService.idTokenClaims$);
    console.log(tokenClaim);
    const token = await firstValueFrom(this.authenticateService.getAccessTokenSilently());
    console.log(token);

    const decodedToken = atob(token);

    const bearerToken = `Bearer ${decodedToken}`;

    console.log(bearerToken);
  }

  logout(): void {
    if (confirm('Are you sure you want to logout?')) {
      this.authenticateService.logout('vehicle');
    }
  }

  login(): void {
    this.authenticateService.loginWithRedirect();
  }
}
