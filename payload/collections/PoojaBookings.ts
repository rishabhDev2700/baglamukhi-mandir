import { CollectionConfig } from 'payload'

export const PoojaBookings: CollectionConfig = {
  slug: 'pooja-bookings',
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
      name: 'pooja',
      type: 'relationship',
      relationTo: 'pooja-options',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
    },
    {
      name: 'message',
      type: 'textarea',
    },
  ],
}
