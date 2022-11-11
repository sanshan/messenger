import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Dialog } from '@messenger/cdk';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from '@app/core/services/dialog.service';

@Component({
  templateUrl: './room-dialog.component.html',
  styleUrls: ['./room-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomDialogComponent {
  dialog$: Observable<Dialog | undefined>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly dialogService: DialogService
  ) {
    const roomId = activatedRoute.snapshot.params['room'];
    this.dialog$ = this.dialogService.getDialogByRoomId$(roomId);
  }
}
