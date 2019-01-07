import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anon-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Landing';
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {
  }

}
