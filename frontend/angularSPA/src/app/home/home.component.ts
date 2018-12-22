import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anon-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  page_title = 'Home Page';
  title = 'Fontend';

  constructor() { }

  ngOnInit() {
  }
}
