import { getPayloadClient } from '@/lib/payload'
import { EventsList, type Event } from '@/components/application/events-list'
import { type Event as PayloadEvent } from '@/payload-types'
import { serializeLexicalToHtml } from '@/lib/richtext' // Import the new serializer

async function EventsPage() {
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'events',
    limit: 100, // Adjust the limit as needed
  })

  const events: Event[] = (docs as PayloadEvent[]).map((doc) => ({
    id: doc.id,
    name: doc.name,
    description: serializeLexicalToHtml(doc.description), // Use the new serializer
    date: doc.date,
    time: doc.time || undefined,
    location: doc.location || undefined,
  }))

  const now = new Date()

  const upcomingEvents = events
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const pastEvents = events
    .filter((event) => new Date(event.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return <EventsList upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
}

export default EventsPage
