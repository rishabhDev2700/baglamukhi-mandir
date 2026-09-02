// Content for the Baal Dharma, Sanskriti & Sangeet Program page.
// Kept separate from the layout so the copy can be edited without touching markup.

export const PROGRAM_NAME = 'Baal Dharma, Sanskriti & Sangeet Program'

export const HERO = {
  eyebrow: 'Shri Baglamukhi Mandir',
  title: PROGRAM_NAME,
  subtitle:
    'A Three-Year Religious, Spiritual & Cultural Learning Program for Children',
  image: '/images/baal-dharma/hero.jpg',
  imageAlt: 'Carved stone shikhars and flags of a Hindu mandir at sunrise',
}

export const HERO_FACTS = [
  { value: '3 Years', label: 'Progressive Program' },
  { value: 'Thu – Sun', label: 'Year-Round' },
  { value: 'Max 5', label: 'Children Per Group' },
]

export const OVERVIEW = {
  image: '/images/baal-dharma/overview.jpg',
  imageAlt: 'Children seated attentively in a classroom',
  paragraphs: [
    'Shri Baglamukhi Mandir offers the Baal Dharma, Sanskriti & Sangeet Program, a structured three-year learning program designed to help children develop a lasting connection with Sanatan Dharma, Bhagwan, Hindu scriptures, Sanskrit, devotional music and Indian spiritual and cultural traditions.',
    'The program runs throughout the year, with progressive learning from Year 1 through Year 3.',
    'To provide meaningful individual attention and participation, each learning group is limited to five (5) or fewer children.',
  ],
}

export const CURRICULUM_INTRO =
  'The three-year curriculum combines religious education, spiritual learning, Hindu culture and devotional music through:'

export const CURRICULUM_GROUPS = [
  {
    title: 'Dharma & Scriptures',
    icon: 'book',
    items: [
      'Sanatan Dharma and its fundamental teachings',
      'Hindu Devis and Devtas',
      'Bhagavad Gita',
      'Ramayana and Mahabharata',
      'Vedas, Puranas and Upanishads',
    ],
  },
  {
    title: 'Sanskrit, Katha & Culture',
    icon: 'scroll',
    items: [
      'Sanskrit Shlokas, Mantras and prayers',
      'Katha and stories about Bhagwan',
      'Hindu festivals, traditions and practices',
      'Cultural storytelling and creative activities',
    ],
  },
  {
    title: 'Sangeet — Devotional Music',
    icon: 'music',
    items: [
      'Tabla',
      'Harmonium',
      'Bhajan singing',
      'Bhajan Jamming & Group Devotional Music',
    ],
  },
  {
    title: 'Values & Spiritual Practice',
    icon: 'heart',
    items: [
      'Morals and values from Sanatan Dharma',
      'Meditation and spiritual practices',
    ],
  },
] as const

export const YEARS = [
  {
    year: 'Year 1',
    title: 'Foundations of Dharma',
    summary:
      'The first year introduces children to the foundations of Sanatan Dharma and creates familiarity with Mandir traditions and devotional practices.',
    lead: 'Children are introduced to:',
    image: '/images/baal-dharma/year-1.jpg',
    imageAlt: 'Clay diyas lit for prayer',
    items: [
      'Bhagwan and major Hindu Devis and Devtas',
      'Basic principles of Sanatan Dharma',
      'Stories from the Ramayana and other Hindu Kathas',
      'Basic Sanskrit Shlokas and prayers',
      'Hindu festivals and their significance',
      'Mandir traditions and practices',
      'Introduction to Bhagavad Gita',
      'Basic Tabla rhythm and taal',
      'Introduction to Harmonium',
      'Simple Bhajans and devotional singing',
      'Respect, kindness, seva and other Dharma-based values',
    ],
  },
  {
    year: 'Year 2',
    title: 'Understanding Dharma & Scriptures',
    summary:
      'The second year develops a deeper understanding of Hindu scriptures, traditions and devotional practices.',
    lead: 'Children progress to:',
    image: '/images/baal-dharma/year-2.jpg',
    imageAlt: 'Hands holding an open devotional scripture',
    items: [
      'Selected teachings and stories from the Bhagavad Gita',
      'Ramayana and Mahabharata',
      'Introduction to the Vedas, Puranas and Upanishads',
      'Sanskrit Shlokas with meaning and pronunciation',
      'Understanding Dharma, Karma and Seva',
      'Hindu traditions and their spiritual significance',
      'Intermediate Tabla',
      'Harmonium accompaniment',
      'Bhajan singing and practice',
      'Bhajan Jamming in small groups',
      'Katha, storytelling and cultural presentations',
      'Meditation and spiritual reflection',
    ],
  },
  {
    year: 'Year 3',
    title: 'Dharma in Practice',
    summary:
      "The final year focuses on strengthening the child's understanding and encouraging practical application of spiritual and cultural learning.",
    lead: 'Students work toward:',
    image: '/images/baal-dharma/year-3.jpg',
    imageAlt:
      'Sculpture of Bhagwan Krishna and Arjuna on the chariot from the Bhagavad Gita',
    items: [
      'Deeper study of selected Bhagavad Gita teachings',
      'Understanding important concepts of Sanatan Dharma',
      'Connecting teachings from the Gita, Ramayana and Mahabharata with everyday life',
      'Advanced Shlokas, Mantras and prayers',
      'Katha presentation and religious storytelling',
      'Confident participation in Mandir prayers and activities',
      'Tabla and Harmonium performance',
      'Bhajan singing and accompaniment',
      'Group Bhajan Jamming and devotional music',
      'Cultural and spiritual presentations',
      'Seva, leadership, respect and community participation',
    ],
  },
]

export const GRADUATION = {
  image: '/images/baal-dharma/graduation.jpg',
  imageAlt: 'A child performing on stage in traditional dress',
  title: 'Baal Dharma & Sangeet Graduation and Recital',
  body: 'At the completion of Year 3, students will participate in a Baal Dharma & Sangeet Graduation and Recital, where they can demonstrate their religious, cultural and musical learning.',
}

export const SANGEET = [
  {
    title: 'Tabla',
    description: 'Rhythm and taal, from first bols through confident performance.',
    image: '/images/baal-dharma/tabla.jpg',
    imageAlt: 'A musician playing the tabla',
  },
  {
    title: 'Harmonium',
    description: 'Melody, accompaniment and supporting the singing of Bhajans.',
    image: '/images/baal-dharma/harmonium.jpg',
    imageAlt: 'Hands playing a harmonium beside marigold flowers',
  },
  {
    title: 'Bhajan & Jamming',
    description: 'Devotional singing and group Bhajan Jamming with other students.',
    image: '/images/baal-dharma/bhajan.jpg',
    imageAlt: 'A group playing devotional music together in traditional dress',
  },
]

export const SCHEDULE = {
  intro:
    'The Baal Dharma, Sanskriti & Sangeet Program operates throughout the year from Thursday through Sunday.',
  sessionNote: 'Different learning sessions are scheduled between:',
  hours: '1:00 p.m. and 9:00 p.m.',
  attendance:
    'Children attend according to their registered program, level and scheduled learning session.',
  days: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
  learningAreas: [
    'Dharma',
    'Bhagavad Gita',
    'Sanskrit & Shlokas',
    'Katha',
    'Tabla',
    'Harmonium',
    'Bhajan',
    'Bhajan Jamming',
    'Hindu Culture',
  ],
  groupSize: {
    heading: 'Maximum five (5) children per learning group',
    body: 'Small groups allow instructors and program-support staff to provide age-appropriate guidance and meaningful individual attention.',
  },
}

export const SUPERVISED = {
  image: '/images/baal-dharma/supervised.jpg',
  imageAlt: 'Two children reading and writing at a desk',
  intro:
    "To support families participating in the Mandir's programs, supervised arrival and pickup periods are available for enrolled participants.",
  detail:
    'Parents may bring enrolled children before their scheduled learning session and are provided a reasonable period following the session for pickup.',
  lead: 'During these periods, children remain in a safe and supervised environment and may participate in age-appropriate activities connected with their Mandir learning, including:',
  activities: [
    'Reviewing Shlokas and prayers',
    'Reading religious and cultural stories',
    'Preparing for their scheduled lesson',
    'Quiet cultural and creative activities',
    'Listening to Bhajans and devotional music',
    'Practising previously learned material',
    'Age-appropriate games, puzzles and interaction with other enrolled participants',
  ],
  notes: [
    'Supervised groups are limited to five (5) or fewer children at any given time.',
    "The supervised arrival and pickup period is provided in connection with participation in the Mandir's religious, spiritual, cultural and devotional learning program.",
  ],
}

export const REGISTRATION = {
  image: '/images/baal-dharma/register.jpg',
  imageAlt: 'A mandir shikhar glowing at sunset',
  intro:
    'The Baal Dharma, Sanskriti & Sangeet Program is a three-year progressive program operating throughout the year.',
  detail:
    'Students progress through the curriculum according to their age, learning level and previous participation.',
  details: [
    { label: 'Program Duration', value: '3 Years' },
    { label: 'Operation', value: 'Year-Round' },
    { label: 'Days', value: 'Thursday to Sunday' },
    { label: 'Program Hours', value: 'Scheduled sessions between 1:00 p.m. and 9:00 p.m.' },
    { label: 'Group Size', value: '5 or fewer children' },
    { label: 'Location', value: 'Shri Baglamukhi Mandir' },
    { label: 'Registration', value: 'Required for participation' },
  ],
  note: 'Detailed class schedules are provided to families following registration.',
}

export const CLOSING = [
  'Learn Dharma.',
  'Understand Our Scriptures.',
  'Experience Sangeet.',
  'Stay Connected to Our Sanskriti.',
]
