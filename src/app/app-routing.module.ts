import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandModule } from './modules/brand/brand.module';
import { ModelModule } from './modules/model/model.module';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'model', loadChildren: () => import('./modules/model/model.module').then(m => m.ModelModule) },
  { path: 'brand', loadChildren: () => import('./modules/brand/brand.module').then(m => m.BrandModule) },
  { path: 'eagerbrand', component: BrandModule },
  { path: 'eagermodel', component: ModelModule },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
