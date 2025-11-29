import { CollectionConfig } from 'payload'

export const Volunteers: CollectionConfig = {
  slug: 'volunteers',
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
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'interests',
      type: 'textarea',
    },
    {
      name: 'availability',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
    },
  ],
}
