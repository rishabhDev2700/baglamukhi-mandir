import { getPayloadClient } from '@/lib/payload'
import { PoojaBookingForm } from '@/components/application/pooja-booking-form'
import { PoojaOption } from '@/payload-types'

async function Page() {
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'pooja-options',
  })

  const poojaOptions = docs as PoojaOption[]

  return <PoojaBookingForm poojaOptions={poojaOptions} />
}

export default Page
