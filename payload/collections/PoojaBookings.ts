import { CollectionConfig } from 'payload'
import { sendEmail } from './PoojaBookings/hooks/sendEmail'

export const PoojaBookings: CollectionConfig = {
  slug: 'pooja-bookings',
  admin: {
    useAsTitle: 'name',
  },
  hooks: {
    afterChange: [sendEmail],
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
