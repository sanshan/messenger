import { Injectable } from '@angular/core';
import { Room } from '@messenger/cdk';
import { map, Observable, of } from 'rxjs';

@Injectable()
export class RoomStore {

  private readonly rooms$: Observable<Room[]> = of([
    {
      id: 111,
      title: 'asd',
      dialog: {
        messages: [
          {
            text: 'asdasdas'
          }
        ]
      }
    } as unknown as Room
  ]);

  constructor() { }

  getRoomById$(roomId: string): Observable<Room | undefined> {
    console.log(roomId);
    return this.rooms$.pipe(
      map((rooms) => rooms.find((room) => +room.id === +roomId))
    );
  }
}
