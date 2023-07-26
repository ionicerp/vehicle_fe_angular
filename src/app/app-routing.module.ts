import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { ModelComponent } from './components/model/model.component';

const routes: Routes = [
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
