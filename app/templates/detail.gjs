
import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { service } from '@ember/service';
import { deleteRecord } from '@warp-drive/utilities/json-api';
import { Request } from '@warp-drive/ember';
import { tracked } from '@glimmer/tracking';

export default class DetailRoute extends Component {
  @service store;
  @service router;

  @tracked model;

  delete = async () => {
    await this.store.request(deleteRecord(this.model));

    this.store.unloadRecord(this.model);

    setTimeout(() => {
      this.router.transitionTo('application');
    }, 2000);
  }

  registerItem = (item) => {
    this.model = item;
  }

  <template>
    <Request @query={{@model}}>
      <:content as |result|>
        {{this.registerItem result.data}}

        <h2>{{this.model.title}}</h2>
        <p>{{this.model.city}}</p>
        <p>{{this.model.owner.name}}</p>

        Friends:

        {{#each this.model.friends as |friend|}}
          <p>{{friend.name}}</p>
        {{/each}}

        <button type="button" {{on "click" this.delete}}>Delete</button>

        {{outlet}}
      </:content>
    </Request>
  </template>
}
