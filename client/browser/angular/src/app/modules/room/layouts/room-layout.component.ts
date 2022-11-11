import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'room-layout',
  templateUrl: './room-layout.component.html',
  styleUrls: ['./room-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomLayout {
}
