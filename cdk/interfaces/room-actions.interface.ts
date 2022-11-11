import { Room } from './room.interface';
import { Message } from './message.interface';

export interface RoomActions {
  createRoom(room: Pick<Room, 'title'>): Room;

  deleteRoom(room: Room): Room;

  addMessagesToRoom(room: Room, messages: Pick<Message, 'text'>[]): Room;
}