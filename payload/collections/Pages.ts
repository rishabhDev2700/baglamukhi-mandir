import { CollectionConfig } from 'payload'

import { RichText } from '../blocks/RichText'
import { Card } from '../blocks/Card'
import { Columns } from '../blocks/Columns'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [RichText, Card, Columns],
    },
  ],
}
