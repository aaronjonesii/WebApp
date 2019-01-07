import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

import { AdminRoutingModule } from './admin-routing.module';
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
import { SafePipe } from './pages/ip/safe.pipe';
import { ModalComponent } from './pages/planner/notes/modal/modal.component';
import { ImagesPipe } from './pages/popcorntime/images.pipe';
import { PopcorntimeService} from './pages/popcorntime/popcorntime.service';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
      DashboardComponent,
      IpComponent,
      // MenuComponent,
      // TopbarComponent,
      PlannerComponent,
      PopcorntimeComponent,
      CalendarComponent,
      NotesComponent,
      TodoComponent,
      PlayerComponent,
      VisitorsComponent,
      WeatherComponent,
      ModalComponent,
      SafePipe,
      ImagesPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbSidebarModule,
    NbActionsModule,
    NbSearchModule,
    NbMenuModule.forRoot(),
    NbInputModule,
    NbListModule,
    NbCardModule,
    NbSpinnerModule,
    NbAccordionModule,
    NbTabsetModule,
    NbCalendarModule,
    NbDialogModule.forRoot(),
    NbButtonModule,
    NbPopoverModule,
    NbTooltipModule,
    NgbModule,
    NgbModalModule,
    DragDropModule,
    ChartsModule,
  ],
  providers: [
    NbSidebarService,
    NbSearchService,
    NbDialogService,
    PopcorntimeService,
    IpComponent,
  ]
})
export class AdminModule { }
