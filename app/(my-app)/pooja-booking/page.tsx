import { getPayloadClient } from '@/lib/payload'
import { PoojaBookingForm } from '@/components/application/pooja-booking-form'
import { PoojaOption } from '@/payload-types'
import { serializeLexicalToHtml } from '@/lib/richtext'
export const dynamic = 'force-dynamic';
async function Page() {
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'pooja-options',
  })

  const poojaOptions = (docs as PoojaOption[]).map((option) => ({
    ...option,
    descriptionHtml: option.description
      ? serializeLexicalToHtml(option.description)
      : undefined,
  }))

  return <PoojaBookingForm poojaOptions={poojaOptions} />
}

export default Page
