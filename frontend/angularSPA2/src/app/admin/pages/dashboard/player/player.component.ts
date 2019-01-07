import { Component } from '@angular/core';

@Component({
  selector: 'anon-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  tracks = [
    {'artist': 'RUSS', 'name': 'Fix This', 'album': 'Just in case..', 'url': 'http://i1.sndcdn.com/artworks-000146382733-1c0jcj-t500x500.jpg'},
    {'artist': 'RUSS', 'name': 'Never Know', 'album': 'Just in case..', 'url': 'http://i1.sndcdn.com/artworks-000146382733-1c0jcj-t500x500.jpg'},
    {'artist': 'RUSS', 'name': 'Alright', 'album': 'Just in case..', 'url': 'http://i1.sndcdn.com/artworks-000146382733-1c0jcj-t500x500.jpg'},
  ];

  constructor() { }



}
