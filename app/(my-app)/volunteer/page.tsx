import { getPayloadClient } from '@/lib/payload'
import { VolunteerList, type Volunteer } from '@/components/application/volunteer-list'

async function VolunteerPage() {
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'volunteers',
    limit: 100, // Adjust the limit as needed
  })

  const volunteers = docs as Volunteer[]

  return <VolunteerList volunteers={volunteers} />
}

export default VolunteerPage
