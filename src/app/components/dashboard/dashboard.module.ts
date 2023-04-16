import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AssetItemComponent } from '../asset-item/asset-item.component';
import { TargetAccessService } from 'src/app/services/target-access.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingIndicatorComponent } from '../../generalComponent/loading-indicator/loading-indicator.component';
import { AssetItemDetailsComponent } from '../asset-item-details/asset-item-details.component';
import { NgxsModule } from '@ngxs/store';
import { AssetState } from 'src/app/state/asset-state';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    DashboardComponent,
    AssetItemComponent,
    LoadingIndicatorComponent,
    AssetItemDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([AssetState])
  ],
  providers: [
    TargetAccessService
  ]
})
export class DashboardModule { }
