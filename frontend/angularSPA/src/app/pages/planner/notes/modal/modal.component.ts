import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'anon-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string;

  constructor(protected dialogRef: NbDialogRef<ModalComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }

}
