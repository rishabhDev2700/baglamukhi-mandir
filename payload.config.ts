import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'

// Collections
import { Events } from './payload/collections/Events'
import { PoojaBookings } from './payload/collections/PoojaBookings'
import { Volunteers } from './payload/collections/Volunteers'
import { Donations } from './payload/collections/Donations'
import { ContactForms } from './payload/collections/ContactForms'
import { Pages } from './payload/collections/Pages'
import { DailyTimetable } from './payload/collections/DailyTimetable'
import { Media } from './payload/collections/Media'

// Globals
import { Header } from './payload/globals/Header'
import { Footer } from './payload/globals/Footer'
import { Gallery } from './payload/globals/Gallery'
import path from 'path'
import { fileURLToPath } from 'node:url'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

if (!process.env.DATABASE_URI) {
  throw new Error('DATABASE_URI is not set in .env file');
}
if (!process.env.PAYLOAD_SECRET) {
  throw new Error('PAYLOAD_SECRET is not set in .env file');
}
export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [
    Events,
    PoojaBookings,
    Volunteers,
    Donations,
    ContactForms,
    Pages,
    DailyTimetable,
    Media,
  ],

  globals: [
    Header,
    Footer,
    Gallery,
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET,
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      beforeDashboard: ['@/payload/components/Dashboard'],
      graphics:{
        Logo:"@/payload/components/Logo",
        Icon:"@/payload/components/Icon"
      }
    },
  },
})