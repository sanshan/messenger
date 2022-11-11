import { RoomActions } from '../interfaces';
import { Provider } from '../_private/interfaces';
import { ManagerRoomActions } from './room-actions';

export class RoomManager {
  public actions: RoomActions | undefined;

  withProvider(provider: Provider): RoomManager {
    this.actions = new ManagerRoomActions(provider);

    return this;
  }
}