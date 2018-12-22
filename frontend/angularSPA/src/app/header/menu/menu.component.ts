import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'anon-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor() { }

  menu_items = [
    { title: 'Dashboard', icon: 'nb-home', link: '/' },
    { title: 'IP Lookup', icon: 'nb-cloudy', link: 'ip', },
    { title: 'Movie Library', icon: 'nb-play-outline', link: 'movies', },
    // { title: 'Music Player', icon: 'nb-audio', link: 'music', },
  ];

}
