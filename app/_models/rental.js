import Model from '@warp-drive/legacy/model';
import { attr, belongsTo, hasMany } from '@warp-drive/legacy/model';

export default class UserModel extends Model {
  @attr title;
  @attr city;
  @attr location;
  @attr category;
  @attr image;
  @attr bedrooms;
  @attr description;

  @belongsTo('user', { async: false, inverse: 'rentals' }) owner;

  @hasMany('friend', { async: false, inverse: 'rental' }) friends;
}
