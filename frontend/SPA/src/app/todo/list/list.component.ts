import {Component, Input, OnInit} from '@angular/core';
import {ItemList} from "../item";

@Component({
  selector: 'anon-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() itemsList: ItemList;
  textColor: string;

  constructor() { }

  ngOnInit() {
    this.gettextColor();
  }

    gettextColor() {
      if (this.itemsList.name === 'Backlog') {
        this.textColor = 'text-danger';
      } else if (this.itemsList.name === 'Up Next') {
        this.textColor = 'text-primary';
      } else if (this.itemsList.name === 'ToDo') {
        this.textColor = 'text-warning';
      } else if (this.itemsList.name === 'In Progress') {
        this.textColor = 'text-info';
      } else if (this.itemsList.name === 'Completed') {
        this.textColor = 'text-success';
      }
    }

}
