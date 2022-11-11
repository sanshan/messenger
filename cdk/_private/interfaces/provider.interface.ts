import { Message, Room } from '../../interfaces';

export interface Provider {
  add(room: Room): Room;

  delete(room: Room): Room;

  update(room: Room, messages: Message[]): Room;
}