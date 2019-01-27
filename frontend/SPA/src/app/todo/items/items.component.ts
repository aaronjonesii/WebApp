import {Component, Input, OnInit} from '@angular/core';
import {Item, ItemList} from "../item";

@Component({
  selector: 'anon-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input() itemsList: Item;
  @Input() name: string;
  cateColor: string;

  constructor() { }

  ngOnInit() {
    // console.log(`This is is from the ${this.itemsList.Backlog}`);
    this.categoryColor();
  }

  categoryColor() {
    if (this.name === 'Backlog') { this.cateColor = 'danger';
    } else if (this.name === 'Up Next') { this.cateColor = 'primary';
    } else if (this.name === 'ToDo') { this.cateColor = 'warning';
    } else if (this.name === 'In Progress') { this.cateColor = 'info';
    } else if (this.name === 'Completed') { this.cateColor = 'success'; }

    // return this.cateColor;
  }

}
