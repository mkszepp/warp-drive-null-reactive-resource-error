import { withDefaults } from '@warp-drive/legacy/model/migration-support';

export const FriendSchema = withDefaults({
  type: 'friend',
  fields: [
    { kind: 'field', name: 'name' },
    {
      kind: 'belongsTo',
      name: 'rental',
      type: 'rental',
      options: { async: false, inverse: 'friends' },
    },
  ],
});
