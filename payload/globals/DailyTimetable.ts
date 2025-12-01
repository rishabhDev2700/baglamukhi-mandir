import { GlobalConfig } from 'payload';

export const DailyTimetable: GlobalConfig = {
  slug: 'daily-timetable',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'timetable',
      type: 'array',
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
    },
  ],
};
