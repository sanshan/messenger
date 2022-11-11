import { Provider } from '../interfaces';
import { Room } from '../../interfaces';

export class HttpProvider implements Provider {
  add<TPayload>(payload: TPayload): Room {
    return {} as unknown as Room;
  }

  delete<TPayload, TResponse>(): Room {
    return {} as unknown as Room;
  }

  update<TPayload, TResponse>(): Room {
    return {} as unknown as Room;
  }
}