import { getPayloadClient } from '@/lib/payload'
import { VolunteerList, type TempleManager } from '@/components/application/volunteer-list'
export const dynamic = 'force-dynamic';
async function VolunteerPage() {
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'volunteers',
    depth: 1,   // populate the photo relationship
    limit: 100,
  })

  const managers: TempleManager[] = docs.map((doc: any) => ({
    id: doc.id,
    name: doc.name,
    role: doc.role ?? undefined,
    phone: doc.phone ?? '',
    photo: doc.photo
      ? { url: doc.photo.url, alt: doc.photo.alt ?? doc.name }
      : undefined,
  }))

  return <VolunteerList managers={managers} />
}

export default VolunteerPage
