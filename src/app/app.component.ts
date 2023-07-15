import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './services/authenticate.service';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import jwtDecode from 'jwt-decode';
import { VehicleService } from './services/vehicle.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vehicle_fe_angular';

  token: string = '';
  environmentName: string = '';

  constructor(
    public authenticateService: AuthenticateService,
    public vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.environmentName = environment.ENVIRONMENT_NAME;
    this.initConfig();

    // console.log(oriToken);
    // const base64Url = oriToken.split('.')[1];
    // console.log(base64Url);
    // const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    // const decodedToken = decodeURIComponent(escape(window.atob(base64)));
    // console.log(decodedToken);
    // const oriToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InVqV0ZwbFp6emw1dmVvUEZmQ3REbCJ9.eyJodHRwczovL2FwcC5pb25pY2VycC5jb20vYXBwX21ldGFkYXRhIjp7ImNvbXBhbnlJZHMiOlsiYXV0b2xpdmUiLCJpb25pY2VycCJdfSwiaXNzIjoiaHR0cHM6Ly9pb25pY2VycC51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjRhMjY1YjcxM2ExNTg1MjhiOTBlMGVlIiwiYXVkIjpbImh0dHBzOi8vaW9uaWNlcnAudXMuYXV0aDAuY29tL2FwaS92Mi8iLCJodHRwczovL2lvbmljZXJwLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2ODgzODI5MzYsImV4cCI6MTY4ODQ2OTMzNiwiYXpwIjoidFlrMGpEd2QyOU9HOVY4Qm1aSmwzRm9YYVJyNXk4R08iLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.bs3tQ0V5K_itYmUHP8ROvz3iWljqLmmiMq_HrpJIeL2IQ7jCChu7WrrZCYt9GomK_lUZ2WbfEdqIntfCV5UYg4kGYL2ehQT0JcLwO3k0e84OrI1UGsNUCE6J2SOrENm6mQjNidTSqrAOVtbEDVmrUTHiyaSdCrkOthI3pA1Y2-vtrs3kiY0keFjIVxZcST4HF3tizu7b1VMrXe0nbShyTINcQGDesSGCjQcc4oo5901qyMjvG1IUo5nX_R6gAoGR13oCotGc-iEzKGzbgJp52-gcwKwMP39Cinyk2-1rqAqJ2XEPTa5mLL6zvpn5cw4TNeX8BojN0X-tNswwpo8h_g';

    // console.log(jwtDecodeToken);


    // const customMetadata = jwtDecodeToken.custom_claim;

  }

  async initConfig() {
    // const user = await firstValueFrom(this.authenticateService.user$);
    // console.log(user);
    // const tokenClaim = await firstValueFrom(this.authenticateService.idTokenClaims$);
    // console.log(tokenClaim);
    // const token = await firstValueFrom(this.authenticateService.getAccessTokenSilently());
    // console.log(token);
    const tokenWithAud = await firstValueFrom(this.authenticateService.getAccessTokenSilentlyWithAudience());

    console.log('tokenWithAud');
    console.log(tokenWithAud);
    const jwtDecodeToken: any = jwtDecode(tokenWithAud);
    // const userAppMetadata = jwtDecodeToken.user_app_metadata;

    console.log('jwtDecodeToken');
    console.log(jwtDecodeToken)

    console.log('app_metadata');
    console.log(jwtDecodeToken['https://app.ionicerp.com/app_metadata'])

    const vehicle = await firstValueFrom(this.vehicleService.get(tokenWithAud ?? ''));
    console.log('vehicle');
    console.log(vehicle);

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
