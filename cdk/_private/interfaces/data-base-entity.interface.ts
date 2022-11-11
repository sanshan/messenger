import { EntityId } from '../types';

export interface DataBaseEntity<TUser> {
  id: EntityId;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy: TUser;
  updatedBy: TUser;
  deletedBy: TUser;
}