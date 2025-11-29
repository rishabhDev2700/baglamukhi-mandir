import { CollectionConfig } from 'payload'

export const DailyTimetable: CollectionConfig = {
  slug: 'daily-timetable',
  admin: {
    useAsTitle: 'activity',
  },
  fields: [
    {
      name: 'time',
      type: 'text',
      required: true,
    },
    {
      name: 'activity',
      type: 'text',
      required: true,
    },
  ],
}
