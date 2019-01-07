import { Component } from '@angular/core';
import { ModalComponent } from "./modal/modal.component";
import { NbDialogService } from '@nebular/theme';



@Component({
  selector: 'anon-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {
  random_color = this.getRandomColor();
  random_color2 = this.getRandomColor();
  color = 0;
  colors = [];
  notes = [
      {'title': 'Finish Note Page', 'description': 'Create Backend Notes API for this page.', 'tags': 'notes, backend api, create'},
      {'title': 'Replace Notes on page', 'description': 'Place the notes reveal cards in the center of the page under the "Create a New Note" button.', 'tags': 'redesign, notes, frontend'},
  ];

  constructor(private dialogService: NbDialogService) {  }

  showNotesModal() {
    this.dialogService.open(ModalComponent, {
      context: {
        title: 'Enter New Note details below:',
      },
    });
  }

  getRandomColor() {
        this.colors = ['primary', 'info', 'warning', 'danger', 'success'];
        this.color = Math.floor(Math.random() * (this.colors.length + 1))
        this.color = this.colors[this.color]
        return this.color;
    }


}
