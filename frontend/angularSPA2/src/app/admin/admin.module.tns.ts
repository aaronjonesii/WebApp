import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IpComponent } from './pages/ip/ip.component';
import { MenuComponent } from './header/menu/menu.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { PlannerComponent } from './pages/planner/planner.component';
import { PopcorntimeComponent } from './pages/popcorntime/popcorntime.component';
import { CalendarComponent } from './pages/planner/calendar/calendar.component';
import { NotesComponent } from './pages/planner/notes/notes.component';
import { TodoComponent } from './pages/planner/todo/todo.component';
import { PlayerComponent } from './pages/dashboard/player/player.component';
import { VisitorsComponent } from './pages/dashboard/visitors/visitors.component';
import { WeatherComponent } from './pages/dashboard/weather/weather.component';
import { ModalComponent } from './pages/planner/notes/modal/modal.component';

@NgModule({
  declarations: [DashboardComponent, IpComponent, MenuComponent, TopbarComponent, PlannerComponent, PopcorntimeComponent, CalendarComponent, NotesComponent, TodoComponent, PlayerComponent, VisitorsComponent, WeatherComponent, ModalComponent],
  imports: [
    AdminRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AdminModule { }
