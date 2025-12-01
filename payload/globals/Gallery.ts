import { GlobalConfig } from 'payload'

export const Gallery: GlobalConfig = {
  slug: 'gallery',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          access:{
            read:()=>true
          }
        },
      ],
    },
  ],
}
