import { Injectable } from '@angular/core';
import { Dialog, Room } from '@messenger/cdk';
import { filter, map, Observable } from 'rxjs';
import { RoomStore } from '@app/core/services/room-store.service';

@Injectable()
export class DialogService {

  constructor(
    private readonly roomStore: RoomStore
  ) { }

  getDialogByRoomId$(roomId: Room['id']): Observable<Dialog | undefined> {
    return this.roomStore.getRoomById$(roomId)
      .pipe(
        map((room) => room?.dialog)
      );
  }
}
