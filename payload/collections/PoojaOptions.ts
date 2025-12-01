import { CollectionConfig } from 'payload'

export const PoojaOptions: CollectionConfig = {
  slug: 'pooja-options',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
  ],
}
