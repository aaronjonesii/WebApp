import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Item} from "./item";

declare var eva: any;

@Component({
  selector: 'anon-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


  backlogList: Item[] = [
      {title: 'Create ToDo DB table', desc: 'The ToDo DB will be used to for the Backend API service to handle the ToDo Apps items', completed: false, tags: ['angular', 'todo', 'development'], created_at: '', updated_at: ''},
  ];

  upnextList: Item[] = [
    {title: 'Navigation for Blog', desc: 'Add Home button and other pages to top of Blog Application', completed: false, tags: ['angular', 'blog', 'development'], created_at: '', updated_at: ''},
  ];

  todoList: Item[] = [
    {title: 'WireFrame Design', desc: 'Design Layout of ToDo Application', completed: false, tags: ['angular', 'development'], created_at: '', updated_at: ''},
    ];

  inprogList: Item[] = [
    {title: 'Redesign ToDo for SCRUM', desc: 'Columns for [Backlog, UpNext, ToDo, InProgress, Completed]', completed: false, tags: ['angular', 'todo', 'development'], created_at: '', updated_at: ''},
    {title: 'WireFrame Design', desc: 'Design Layout of ToDo Application', completed: false, tags: ['angular', 'development'], created_at: '', updated_at: ''},
  ];

  completedList: Item[] = [
    {title: 'Dynamic Items Component', desc: 'Use One component to showcase each categories items form the particular list.', completed: true, tags: ['angular', 'todo', 'development'], created_at: '', updated_at: ''},
  ];


  // itemsList = [
  //   {name: 'Backlog', items: this.backlogList},
  //   {name: 'UpNext', items: this.upnextList},
  //   {name: 'ToDo', items: this.todoList},
  //   {name: 'InProgress', items: this.inprogList},
  //   {name: 'Completed', items: this.completedList},
  //
  // ];

  // itemsList = {
  //   Backlog: this.backlogList,
  //   Upnext: this.upnextList,
  //   Todo: this.todoList,
  //   Inprogress: this.inprogList,
  //   Completed: this.completedList
  // };

  itemsList = {
    Backlog: {name: 'Backlog', items: this.backlogList},
    UpNext: {name: 'Up Next', items: this.upnextList},
    ToDo: {name: 'ToDo', items: this.todoList},
    InProgress: {name: 'In Progress', items: this.inprogList},
    Completed: {name: 'Completed', items: this.completedList},
  };

  constructor() { }

  ngOnInit() {
    // Delay Eva Icons SVG replacement
    setTimeout(() => eva.replace(), 1000);
  }

}
