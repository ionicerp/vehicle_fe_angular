import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { ModelComponent } from './components/model/model.component';
import { AppComponent } from './app.component';
import { switchFrontend } from '@ionicerp/shared-fe';

const routes: Routes = [
  { path: 'switch-fe/account', component: AppComponent, canActivate: [switchFrontend('https://app.ionicerp.com/account')] },
  { path: 'switch-fe/appointment', component: AppComponent, canActivate: [switchFrontend('https://app.ionicerp.com/appointment')] },
  { path: 'switch-fe/company', component: AppComponent, canActivate: [switchFrontend('https://app.ionicerp.com/company')] },
  { path: 'switch-fe/reminder', component: AppComponent, canActivate: [switchFrontend('https://app.ionicerp.com/reminder')] },
  { path: 'switch-fe/vehicle', component: AppComponent, canActivate: [switchFrontend('https://app.ionicerp.com/vehicle')] },
  { path: 'switch-fe/whatsapp', component: AppComponent, canActivate: [switchFrontend('https://app.ionicerp.com/whatsapp')] },
  { path: 'model', loadChildren: () => import('./modules/model/model.module').then(m => m.ModelModule) },
  { path: 'brand', loadChildren: () => import('./modules/brand/brand.module').then(m => m.BrandModule) },
  { path: 'eagerbrand', component: BrandComponent },
  { path: 'eagermodel', component: ModelComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
