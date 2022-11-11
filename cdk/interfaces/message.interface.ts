import { DataBaseEntity } from '../_private';
import { User } from './user.interface';

export interface Message extends DataBaseEntity<User> {
  text: string;
}