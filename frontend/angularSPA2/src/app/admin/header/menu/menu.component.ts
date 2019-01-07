import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'anon-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private menuService: NbMenuService) { }

  menu_items = [
    { title: 'Home', icon: 'nb-home', link: '/', home: true },
    { title: 'Dashboard', icon: 'nb-grid-a-outline', link: '/dashboard' },
    { title: 'IP Lookup', icon: 'nb-cloudy', link: 'ip', },
    { title: 'Movie Library', icon: 'nb-play-outline', link: 'movies', },
    { title: 'Project Planner', icon: 'nb-compose', link: 'planner', },
    // { title: 'Music Player', icon: 'nb-audio', link: 'music', },
  ];

}
