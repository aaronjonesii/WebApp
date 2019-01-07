import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'anon-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

    todo = [
    'Password Generator',
      'WhoIs Lookup',
      'Youtube Downloader',
      'Python3 CLI Sandbox Environment',
  ];

  inprog = [
    'Movies Search API',
    'ToDo',
    'Project Planner',
  ];

  completed = [
      'IP Lookup',
      'Movie Library',
  ];

  constructor() { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
