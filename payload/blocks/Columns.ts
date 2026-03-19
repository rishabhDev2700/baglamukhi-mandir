import { Block } from 'payload'

export const Columns: Block = {
  slug: 'columns',
  fields: [
    {
      name: 'columns',
      type: 'array',
      minRows: 2,
      maxRows: 4,
      fields: [
        {
          name: 'content',
          type: 'richText',
        },
      ],
    },
  ],
}
