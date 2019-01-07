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
import { AdminComponent } from './admin.component';
import { PopcorntimeService } from '../pages/popcorntime/popcorntime.service';
import { IpComponent } from '../pages/ip/ip.component';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
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
