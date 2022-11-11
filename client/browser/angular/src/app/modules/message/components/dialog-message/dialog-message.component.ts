import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogMessageComponent  {

}
