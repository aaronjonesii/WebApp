// Common Modules //
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
// Nebular
import { NebularModule } from './mods/nebular/nebular.module';
// Material
import { MaterialModule } from './mods/material/material.module';

// Components //
import { AppComponent } from './app.component';
import { HomeComponent, BottomSheet } from './home/home.component';
import { IpComponent } from './ip/ip.component';
import { MusicComponent } from './music/music.component';
import { MoviesComponent } from './movies/movies.component';
import {AdminComponent} from "./admin/admin.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BottomSheet,
    IpComponent,
    MusicComponent,
    MoviesComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    MaterialModule,
    NebularModule,
  ],
  exports: [ ],
  entryComponents: [ ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
