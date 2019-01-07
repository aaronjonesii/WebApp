import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'anon-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  date = new Date();
  date_details = [
      {'date': '12.30.2018', 'name': 'Appointment', 'description': 'Some details of the appointment set..'},
      {'date': '12.30.2018', 'name': 'Meeting', 'description': 'Some details of the meeting set..'}
      ];

  constructor() { }

  ngOnInit() {
  }

}
