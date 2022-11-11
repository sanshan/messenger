import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-messenger-dialog',
  templateUrl: './messenger-dialog.component.html',
  styleUrls: ['./messenger-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessengerDialogComponent {
}
