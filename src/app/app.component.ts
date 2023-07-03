import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './services/authenticate.service';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vehicle_fe_angular';

  constructor(
    public authenticateService: AuthenticateService,
  ) { }

  ngOnInit(): void {
    this.initConfig();
  }

  async initConfig() {
    const user = await firstValueFrom(this.authenticateService.user$);
    console.log(user);
  }

  logout(): void {
    if (confirm('Are you sure you want to logout?')) {
      this.authenticateService.logout('messaging');
    }
  }

  login(): void {
    this.authenticateService.loginWithRedirect();
  }
}
