import { Provider } from '../interfaces';
import { Room } from '../../interfaces';

export class DatabaseProvider implements Provider {
  add<TPayload>(payload: TPayload): Room {
    return {} as unknown as Room;
  }

  delete<TPayload>(): Room {
    return {} as unknown as Room;
  }

  update<TPayload>(): Room {
    return {} as unknown as Room;
  }
}