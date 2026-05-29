import Model from '@warp-drive/legacy/model';
import { attr, hasMany } from '@warp-drive/legacy/model';

export default class UserModel extends Model {
  @attr name;

  @hasMany('rental', { async: false, inverse: 'owner' }) rentals;
}
