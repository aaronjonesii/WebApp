import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PopcorntimeComponent } from './pages/popcorntime/popcorntime.component';
import { IpComponent } from './pages/ip/ip.component';
import { PlannerComponent } from './pages/planner/planner.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'planner', component: PlannerComponent, },
      { path: 'movies', component: PopcorntimeComponent, },
      { path: 'ip', component: IpComponent, },
      { path: 'ip/:query_ip', component: IpComponent },
    ],
  },
  // { path: 'dashboard', component: DashboardComponent, },
  // { path: 'planner', component: PlannerComponent, },
  // { path: 'movies', component: PopcorntimeComponent, },
  // { path: 'ip', component: IpComponent, },
  // { path: 'ip/:query_ip', component: IpComponent },
];
