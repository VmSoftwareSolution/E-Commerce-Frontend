import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,

} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-dialog-modal',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule
  ],
  templateUrl: './dialog-modal.component.html',
  styleUrl: './dialog-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string, tittle:string }) {}

}
