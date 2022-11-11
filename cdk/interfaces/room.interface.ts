import { DataBaseEntity } from '../_private';
import { User } from './user.interface';
import { Dialog } from './dialog.interface';

export interface Room extends DataBaseEntity<User> {
  title: string;

  dialog: Dialog | undefined;
}