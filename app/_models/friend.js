import Model from '@warp-drive/legacy/model';
import { attr, belongsTo } from '@warp-drive/legacy/model';

export default class FriendModel extends Model {
  @attr name;

  @belongsTo('rental', { async: false, inverse: 'friends' }) rental;
}
