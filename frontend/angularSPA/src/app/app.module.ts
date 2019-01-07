import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
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
  NbDialogService,

} from '@nebular/theme';
import { TopbarComponent } from './header/topbar/topbar.component';
import { MenuComponent } from './header/menu/menu.component';
import { PopcorntimeComponent } from './pages/popcorntime/popcorntime.component';
import { PopcorntimeService } from './pages/popcorntime/popcorntime.service';
import { IpComponent } from './pages/ip/ip.component';
import { ImagesPipe } from './pages/popcorntime/images.pipe';
import { routes } from './app.routes';
import { PlannerComponent } from './pages/planner/planner.component';
import { DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CalendarComponent } from './pages/planner/calendar/calendar.component';
import { TodoComponent } from './pages/planner/todo/todo.component';
import { NotesComponent } from './pages/planner/notes/notes.component';
import { ModalComponent } from './pages/planner/notes/modal/modal.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SafePipe } from './pages/ip/safe.pipe';
import { WeatherComponent } from './pages/dashboard/weather/weather.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { VisitorsComponent } from './pages/dashboard/visitors/visitors.component';
import { PlayerComponent } from './pages/dashboard/player/player.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    MenuComponent,
    PopcorntimeComponent,
    IpComponent,
    ImagesPipe,
    PlannerComponent,
    CalendarComponent,
    TodoComponent,
    NotesComponent,
    ModalComponent,
    SafePipe,
    WeatherComponent,
    VisitorsComponent,
    PlayerComponent,
    DashboardComponent,
    AdminComponent,
  ],
  entryComponents: [
    ModalComponent, // For Notes Modal
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
    NbSpinnerModule,
    NbAccordionModule,
    NbTabsetModule,
    NbCalendarModule,
    NbDialogModule.forRoot(),
    NbButtonModule,
    NgbModule,
    NgbModalModule,
    NbPopoverModule,
    NbTooltipModule,
    DragDropModule,
    ChartsModule,
    // RouterModule.forRoot(
    //   routes,
    //   { enableTracing: true } // <-- debugging purposes only
    // ),
  ],
  providers: [
    NbSidebarService,
    NbSearchService,
    NbDialogService,
    PopcorntimeService,
    IpComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
