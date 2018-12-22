import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbProgressBarModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbStepperModule,
  NbButtonModule,
  NbInputModule,
  NbAccordionModule,
  NbDatepickerModule,
  NbDialogModule,
  NbWindowModule,
  NbListModule,
  NbToastrModule,
  NbAlertModule,
  NbSpinnerModule,
  NbRadioModule,
  NbSelectModule,
  NbChatModule,
  NbTooltipModule,
  NbCalendarKitModule,
  NbSidebarService,
  NbSearchService,
} from '@nebular/theme';
import { TopbarComponent } from './header/topbar/topbar.component';
import { MenuComponent } from './header/menu/menu.component';
import { PopcorntimeComponent } from './pages/popcorntime/popcorntime.component';
import { PopcorntimeService } from './pages/popcorntime/popcorntime.service';
import { IpComponent } from './pages/ip/ip.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    MenuComponent,
    PopcorntimeComponent,
    IpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
    NbActionsModule,
    NbSearchModule,
    NbMenuModule.forRoot(),
    NbInputModule,
    HttpClientModule,
    NbListModule,
    NbCardModule,
  ],
  providers: [
    NbSidebarService,
    NbSearchService,
    PopcorntimeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
