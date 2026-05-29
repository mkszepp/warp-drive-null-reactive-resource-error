import { useLegacyStore } from '@warp-drive/legacy';
import { JSONAPICache } from '@warp-drive/json-api';
import { RentalSchema } from '../schemas/rental';
import { UserSchema } from '../schemas/user';
import { FriendSchema } from '../schemas/friend';

const RequestHandler = {
  async request(context, next) {
    const headers = new Headers(context.request.headers);

    if (context.request.method === 'DELETE') {
      context.request.url = context.request.url + '-delete.json';
    } else {
      context.request.url = context.request.url + '.json';
    }

    const result = await next(Object.assign({}, context.request, { headers }));

    return result;
  },
};

const Store = useLegacyStore({
  linksMode: false,
  legacyRequests: false,
  cache: JSONAPICache,
  handlers: [
    RequestHandler,
  ],
  schemas: [RentalSchema, UserSchema, FriendSchema],
});

export default Store;
