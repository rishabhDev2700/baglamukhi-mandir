import { getPayloadClient } from '@/lib/payload'
import { EventsList, type Event } from '@/components/application/events-list'
import { type Event as PayloadEvent } from '@/payload-types'

// Basic function to serialize Payload's rich text to a string.
// This is a simplified example. For a production app, you'd want a more robust serializer.
const serializeRichText = (richText: any): string => {
  if (!richText || !richText.root || !richText.root.children) {
    return ''
  }
  return richText.root.children
    .map((node: any) => {
      if (node.type === 'p' && node.children) {
        return node.children.map((leaf: any) => leaf.text).join('')
      }
      return ''
    })
    .join('\n')
}
async function EventsPage() {
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'events',
    limit: 100, // Adjust the limit as needed
  })

  const events: Event[] = (docs as PayloadEvent[]).map((doc) => ({
    id: doc.id,
    name: doc.name,
    description: serializeRichText(doc.description),
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
