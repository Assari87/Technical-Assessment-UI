import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetItemDetailsComponent } from './components/asset-item-details/asset-item-details.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)    
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
