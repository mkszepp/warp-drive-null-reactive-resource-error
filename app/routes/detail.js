import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { findRecord } from '@warp-drive/utilities/json-api';

export default class DetailRoute extends Route {
  @service store;

  async model(params) {
    return findRecord('rental', params.id);
  }
}
