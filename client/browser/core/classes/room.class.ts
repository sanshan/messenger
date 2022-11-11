import { Room, User } from '../../../../cdk';
import { EntityId } from '../../../../cdk/_private/types';

export class MessengerRoom implements Room {
  id: EntityId;
  title: string;
  createdAt: Date;
  createdBy: User;
  deletedAt: Date;
  deletedBy: User;
  updatedAt: Date;
  updatedBy: User;
}