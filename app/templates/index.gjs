import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "WarpDriveError"}}

  {{#each @model as |rental|}}
    <div class="rental">
      <h2>{{rental.title}}</h2>
      <p>{{rental.city}}</p>
      <LinkTo @route="detail" @model={{rental.id}}>Details</LinkTo>
    </div>
  {{/each}}

  {{outlet}}
</template>
