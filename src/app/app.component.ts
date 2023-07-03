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

    // const oriToken = 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9pb25pY2VycC51cy5hdXRoMC5jb20vIn0..j55XV_Jbv722FJpk.LCxBkd7KcljnUgLgb5owDV9Mx5w2enxUOINrEOr49phIzZVu5OinUA1tED6l5m6Easa1FO2DNbSysq820dh--0j4StLV-ZkjkU90fD4ZFkgsDGlW69Gdtm7tDvDvCmxeAi0HoPFkAmH-ijqaVA9oj9isnrMCCuWmgOiyM6tKWBKpQoMPIVrvOb7fWh-E8H4MTZ_oMkZebD91wC1WSbHY2e-aLuYTQdEM5gcOdSY0vwv9oIjxBmJdCURqPwASOK50Rn8FAwZuA8tplKp607YnkdPV50lIqlahFqhEkp8ruU-N3AiJKmtU7m8_.12hveYVyCL6pighBguzlrQ';
    // console.log(oriToken);
    // const base64Url = oriToken.split('.')[1];
    // console.log(base64Url);
    // const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    // const decodedToken = decodeURIComponent(escape(window.atob(base64)));
    // console.log(decodedToken);
  }

  async initConfig() {
    const user = await firstValueFrom(this.authenticateService.user$);
    console.log(user);
    const tokenClaim = await firstValueFrom(this.authenticateService.idTokenClaims$);
    console.log(tokenClaim);
    const token = await firstValueFrom(this.authenticateService.getAccessTokenSilently());
    console.log(token);
    const tokenWithAud = await firstValueFrom(this.authenticateService.getAccessTokenSilentlyWithAudience());
    console.log(tokenWithAud);
    // const decodedToken = atob(token);

    // const bearerToken = `Bearer ${decodedToken}`;

    // console.log(bearerToken);



    

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
