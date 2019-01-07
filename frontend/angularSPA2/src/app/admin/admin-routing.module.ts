import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IpComponent } from './pages/ip/ip.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  // { path: 'ip', component: IpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
