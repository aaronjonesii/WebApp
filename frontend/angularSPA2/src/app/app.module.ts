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
  NbButtonModule, NbCardModule, NbInputModule,
  NbListComponent, NbListModule, NbSpinnerModule,
} from '@nebular/theme';
import { TopbarComponent } from './admin/header/topbar/topbar.component';
import { MenuComponent } from './admin/header/menu/menu.component';
import { NgbModalModule, NgbModule, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { WeatherComponent } from './admin/pages/dashboard/weather/weather.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { MusicArtworkPipe } from './home/musickit/pipes/music-artwork.pipe';
import { SafePipe } from './admin/pages/ip/safe.pipe';
import { SongComponent } from './home/musickit/components/song/song.component';
import { FormatArtworkUrlPipe } from './home/musickit/pipes/format-artwork-url.pipe';
import { FormatMillisecondsToTextPipe } from './home/musickit/pipes/format-milliseconds-to-text.pipe';
import { FormatMillisecondsPipe } from './home/musickit/pipes/format-milliseconds.pipe';
import { FormatSecondsPipe } from './home/musickit/pipes/format-seconds.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    TopbarComponent,
    MenuComponent,
    MusicArtworkPipe,
    SongComponent,
    FormatArtworkUrlPipe,
    FormatMillisecondsToTextPipe,
    FormatMillisecondsPipe,
    FormatSecondsPipe,
    // SafePipe,
    // WeatherComponent,
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
    NbListModule,
    NbSpinnerModule,
    NbInputModule,
    NgbModalModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [ ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
