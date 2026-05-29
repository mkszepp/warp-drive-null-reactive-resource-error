import { withDefaults } from '@warp-drive/legacy/model/migration-support';

export const RentalSchema = withDefaults({
  type: 'rental',
  fields: [
    { kind: 'field', name: 'title' },
    { kind: 'field', name: 'city' },
    { kind: 'field', name: 'location' },
    { kind: 'field', name: 'category' },
    { kind: 'field', name: 'image' },
    { kind: 'field', name: 'bedrooms' },
    { kind: 'field', name: 'description' },
    {
      kind: 'belongsTo',
      name: 'owner',
      type: 'user',
      options: { async: false, inverse: 'rentals' },
    },
    {
      kind: 'hasMany',
      name: 'friends',
      type: 'friend',
      options: { async: false, inverse: 'rental' },
    },
  ],
});
