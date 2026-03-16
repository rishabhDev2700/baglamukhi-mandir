import { GlobalConfig } from 'payload'

export const HomePageConfig: GlobalConfig = {
  slug: 'home-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Upload a background image for the main hero section of the home page. An ideal image is high-resolution and landscape orientation.',
      },
    },
    {
      name: 'heroTitle',
      type: 'text',
      required: false,
      admin: {
        description: 'The main title displayed in the hero section.',
      },
    },
    {
      name: 'heroDescription',
      type: 'textarea',
      required: false,
      admin: {
        description: 'A short description or subtitle displayed below the hero title.',
      },
    },
  ],
}
