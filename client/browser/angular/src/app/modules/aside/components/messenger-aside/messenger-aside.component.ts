import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-messenger-aside',
  templateUrl: './messenger-aside.component.html',
  styleUrls: ['./messenger-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessengerAsideComponent {
}
