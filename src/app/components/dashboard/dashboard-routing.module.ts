import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AssetItemDetailsComponent } from '../asset-item-details/asset-item-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'assets/:id', component: AssetItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
