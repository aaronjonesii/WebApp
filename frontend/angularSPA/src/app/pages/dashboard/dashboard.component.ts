import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anon-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  page_title = 'Dashboard';
  title = 'Fontend';

  constructor() { }

  ngOnInit() {
  }

}
