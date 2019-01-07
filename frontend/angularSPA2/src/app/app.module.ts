import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import {
  NbThemeModule, NbLayoutModule, NbSidebarModule,
  NbSearchModule, NbActionsModule, NbMenuModule,
  NbButtonModule, NbCardModule, NbInputModule
} from '@nebular/theme';
import { TopbarComponent } from './admin/header/topbar/topbar.component';
import { MenuComponent } from './admin/header/menu/menu.component';
import { NgbModalModule, NgbModule, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { WeatherComponent } from './admin/pages/dashboard/weather/weather.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    TopbarComponent,
    MenuComponent,
  ],
  entryComponents: [
    // ModalComponent, // For Notes Modal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
    NbSearchModule,
    NbActionsModule,
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NgbModalModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
