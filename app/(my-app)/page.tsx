import { HomePage } from '@/components/application/home-page'
import config from "@payload-config";
import { getPayload } from "payload";
import { Media } from '@/payload-types';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const payload = await getPayload({ config });
  
  const homePageData = await payload.findGlobal({
    slug: 'home-page',
    depth: 1,
  });

  const heroImage = homePageData?.heroImage as Media | undefined;

  return (
    <HomePage 
      heroImageUrl={heroImage?.url || undefined} 
      heroImageAlt={heroImage?.alt || undefined}
      heroTitle={homePageData?.heroTitle || undefined}
      heroDescription={homePageData?.heroDescription || undefined}
    />
  )
}
