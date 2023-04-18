import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavItemComponent as SideNavComponent } from './components/layout/side-nav-item/side-nav.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { NotFoundComponent } from './generalComponent/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
