import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './messenger-header.component.html',
  styleUrls: ['./messenger-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessengerHeaderComponent {
}
