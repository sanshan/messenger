import { Message, Room, RoomActions } from '../interfaces';
import { Provider } from '../_private/interfaces';

// ToDo naming
export class ManagerRoomActions implements RoomActions {
  constructor(private readonly provider: Provider) {}

  createRoom(room: Room): Room {
    return this.provider.add(room);
  }

  deleteRoom(room: Room): Room {
    return this.provider.delete(room);
  }

  addMessagesToRoom(room: Room, messages: Message[]): Room {
    return this.provider.update(room, messages);
  }
}