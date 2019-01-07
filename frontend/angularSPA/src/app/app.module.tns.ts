import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { MenuComponent } from './header/menu/menu.component';
import { PopcorntimeComponent } from './pages/popcorntime/popcorntime.component';
import { IpComponent } from './pages/ip/ip.component';
import { PlannerComponent } from './pages/planner/planner.component';
import { CalendarComponent } from './pages/planner/calendar/calendar.component';
import { TodoComponent } from './pages/planner/todo/todo.component';
import { NotesComponent } from './pages/planner/notes/notes.component';
import { ModalComponent } from './pages/planner/notes/modal/modal.component';
import { WeatherComponent } from './home/weather/weather.component';
import { VisitorsComponent } from './home/visitors/visitors.component';
import { PlayerComponent } from './home/player/player.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    MenuComponent,
    PopcorntimeComponent,
    IpComponent,
    PlannerComponent,
    CalendarComponent,
    TodoComponent,
    NotesComponent,
    ModalComponent,
    WeatherComponent,
    VisitorsComponent,
    PlayerComponent,
    DashboardComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
