import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { IpComponent } from './admin/pages/ip/ip.component';
import { PopcorntimeComponent } from './admin/pages/popcorntime/popcorntime.component';
import { PlannerComponent } from './admin/pages/planner/planner.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      pathMatch: 'full',
  },
  {
      path: 'dashboard',
      component: AdminComponent,
      children: [
          {path: '', component: DashboardComponent },
          { path: 'ip', component: IpComponent},
          { path: 'ip/:query_ip', component: IpComponent },
          { path: 'movies', component: PopcorntimeComponent },
          { path: 'planner', component: PlannerComponent },
      ]
  },
];
