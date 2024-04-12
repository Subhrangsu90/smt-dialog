import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smt-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './smt-dialog.component.html',
  styleUrl: './smt-dialog.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SMTDialogComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Input() buttons: { text: string; style: string; action?: () => void }[] = [];
  @Input() modalStyle: any = {};
  @Input() showOverlay: boolean = true;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  onCloseModal() {
    this.isOpen = false;
    this.closeModal.emit();
  }

  executeAction(action?: () => void) {
    if (action) {
      action();
    }
    this.onCloseModal();
  }
}
