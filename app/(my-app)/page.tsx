import { getPayloadClient } from '@/lib/payload'
import { HomePage, type TimetableItem, type GalleryImage, type GalleryImageItem } from '@/components/application/home-page'
import { type Media } from '@/payload-types' // Import Media type from payload-types

async function Page() {
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'daily-timetable',
  })

  const timetable = docs as TimetableItem[]

  const gallery = await payload.findGlobal({
    slug: 'gallery',
  })

  // Ensure gallery.images is an array and map to HomePage's GalleryImage type
  const galleryImages: GalleryImage[] = (gallery.images ?? [])
    .filter((item): item is { image: Media; id?: string | null | undefined } =>
      typeof item.image !== 'string' && item.image !== null && item.image !== undefined
    )
    .map(item => ({
      image: {
        id: item.image.id,
        alt: item.image.alt ?? '', // Provide fallback for alt text if null
        url: item.image.url ?? '', // Provide fallback for url if null
        filename: item.image.filename ?? '',
        mimeType: item.image.mimeType ?? '',
        filesize: item.image.filesize ?? 0,
        width: item.image.width ?? 0,
        height: item.image.height ?? 0,
        createdAt: item.image.createdAt ?? '',
        updatedAt: item.image.updatedAt ?? '',
      } as GalleryImageItem // Cast to ensure type compatibility
    }));

  return <HomePage timetable={timetable} galleryImages={galleryImages} />
}

export default Page
