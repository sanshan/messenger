import { Message } from './message.interface';
import { DataBaseEntity } from '../_private';

export interface Dialog extends DataBaseEntity<any> {
  title: string;
  messages: Message[];
}