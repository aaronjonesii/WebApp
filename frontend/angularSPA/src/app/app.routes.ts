import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { IpComponent } from './ip/ip.component';
import { MusicComponent } from './music/music.component';
import { MoviesComponent } from './movies/movies.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      component: HomeComponent,
  },
  { path: 'admin', component: AdminComponent, },
  { path: 'blog', component: BlogComponent, },
  { path: 'ip', component: IpComponent, },
  { path: 'music', component: MusicComponent, },
  { path: 'movies', component: MoviesComponent, },

  // { path: 'planner', component: PlannerComponent, },
];
