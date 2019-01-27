import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { IpComponent } from './ip/ip.component';
import { MusicComponent } from './music/music.component';
import { MoviesComponent } from './movies/movies.component';
import { TodoComponent } from './todo/todo.component';
import { PostComponent } from './blog/post/post.component';


export const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      component: HomeComponent,
  },
  { path: 'admin', component: AdminComponent, },
  { path: 'blog', component: BlogComponent, },
  { path: 'blog/:post_id', component: PostComponent, },
  { path: 'ip', component: IpComponent, },
  { path: 'music', component: MusicComponent, },
  { path: 'movies', component: MoviesComponent, },
  { path: 'todo', component: TodoComponent, },
];
