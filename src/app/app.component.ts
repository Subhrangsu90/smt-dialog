import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SMTDialogComponent } from '../../projects/smt-dialog/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SMTDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dialog';
  modalButtons = [
    { text: 'Save', style: 'primary', action: () => this.saveData() },
    { text: 'Cancel', style: 'secondary', action: () => this.cancel() },
    { text: 'Ok', style: 'secondary', action: () => this.cancel() },
  ];

  modalOpen: boolean = false;

  openModal() {
    this.modalOpen = true;
  }
  // onModalClose() {
  //   this.modalOpen = false;
  // }

  saveData() {
    console.log('Data saved.');
  }

  cancel() {
    console.log('Operation canceled.');
  }
}
