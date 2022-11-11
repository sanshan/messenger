import { DataBaseEntity } from '../_private';

export interface User extends DataBaseEntity<User> {
  login: string;
  password: string;
  lastLoginAt: Date;
}