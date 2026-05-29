import { withDefaults } from '@warp-drive/legacy/model/migration-support';

export const UserSchema = withDefaults({
  type: 'user',
  fields: [
    { kind: 'field', name: 'name' },
    {
      kind: 'hasMany',
      name: 'rentals',
      type: 'rental',
      options: { async: false, inverse: 'owner' },
    },
  ],
});
