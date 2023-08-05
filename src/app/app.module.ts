import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';

import { HttpClientModule } from '@angular/common/http';
import { ModelComponent } from './components/model/model.component';
import { BrandComponent } from './components/brand/brand.component';
import { SharedFeModule } from '@ionicerp/shared-fe';


@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'ionicerp.us.auth0.com',
      clientId: 'tYk0jDwd29OG9V8BmZJl3FoXaRr5y8GO',
      authorizationParams: {
        redirect_uri: `${window.location.origin}/vehicle`,
        prompt: 'login'
      },
    }),
    HttpClientModule,
    SharedFeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
