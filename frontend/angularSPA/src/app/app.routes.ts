import { Routes } from '@angular/router';

import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { PopcorntimeComponent } from './pages/popcorntime/popcorntime.component';
import { IpComponent } from "./pages/ip/ip.component";


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', },
  { path: 'home', component: HomeComponent, },
  { path: 'movies', component: PopcorntimeComponent, },
  { path: 'ip', component: IpComponent, },
];
